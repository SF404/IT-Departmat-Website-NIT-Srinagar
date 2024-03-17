import { Button, Divider, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'

function MyProfile({ openMyProfile, closeMyProfile, user }) {
    const toast = useToast();
    const [myInfo, setMyInfo] = useState({
        name: user.name,
        profile_photo: user.profile_photo,
        email: user.email,
        phone: user.phone,
        description: user.description,
        research_field: user.research_field,
        about: user.about,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMyInfo({
            ...myInfo,
            [name]: value,
        });
    };
    const handleFileChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...myInfo };
        const file = e.target.files[0];
        updatedFormData[name] = file;
        setMyInfo(updatedFormData);
    };
    function get_token() {
        return {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
                Accept: "application/json",
            },
        };
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(myInfo);
            if (myInfo.phone == user.phone && myInfo.profile_photo && user.profile_photo && myInfo.about == user.about && myInfo.research_field == user.research_field) { console.log('not change'); return; }
            const response = await axios.put(`/api/profileupdate/${user.id}/?email=${user.email}`,
                myInfo,
                get_token()
            );
            toast({
                varient: 'left-accent',
                title: 'Successfully updated',
                description: "",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                varient: 'left-accent',
                title: 'Something went Wrong',
                description: "",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        closeMyProfile();
    };
    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={openMyProfile} onClose={closeMyProfile} motionPreset='slideInLeft' scrollBehavior={'inside'} size={'3xl'}>
                <ModalOverlay backdropFilter='auto' backdropBlur='2px' />
                <ModalContent zIndex={999}>
                    <ModalHeader>My Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Divider />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <img src={myInfo.profile_photo} alt="Image" /><Input
                                    type="file"
                                    name="profile_photo"
                                    display={"none"}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" name="name" value={myInfo.name} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" value={myInfo.email} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Phone</FormLabel>
                                <Input type="tel" name="phone" value={myInfo.phone} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea name="description" value={myInfo.description} size="sm" resize="vertical" rows={4} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Research Field</FormLabel>
                                <Input type="text" name="research_field" value={myInfo.research_field} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>About</FormLabel>
                                <Textarea name="about" value={myInfo.about} size="sm" resize="vertical" rows={4} onChange={handleInputChange} />
                            </FormControl>
                            <ModalFooter mt={4}>
                                <Button type="submit" colorScheme='teal' borderRadius={'full'}>   Save  </Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default MyProfile