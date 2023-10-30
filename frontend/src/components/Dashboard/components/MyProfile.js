import { Button, Divider, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'

function MyProfile({ openMyProfile, closeMyProfile, user }) {
    const [myInfo, setMyInfo] = useState({
        name: user.name,
        profile_photo: user.profile_photo,
        email: user.email,
        phone: user.phone,
        description: user.description,
        research_field: user.research_field,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMyInfo({
            ...myInfo,
            [name]: value,
        });
    };

    const handleSubmit = () => {
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
                                <img src={myInfo.profile_photo} alt="Image" />
                            </div>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" name="name" value={myInfo.name} onChange={handleInputChange} isRequired />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" value={myInfo.email} onChange={handleInputChange} isRequired />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Phone</FormLabel>
                                <Input type="tel" name="phone" value={myInfo.phone} onChange={handleInputChange} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea name="description" value={myInfo.description} onChange={handleInputChange} size="sm" resize="vertical" rows={4} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Research Field</FormLabel>
                                <Input type="text" name="research_field" value={myInfo.research_field} onChange={handleInputChange} />
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