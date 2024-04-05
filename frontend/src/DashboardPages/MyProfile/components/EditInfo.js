import React, { useState } from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Input, FormHelperText, VStack, IconButton, Textarea, Avatar } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { updateProfile } from '../../../Api/api';

const EditInfo = ({ profileData, fetchProfile }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        email: profileData.email,
        phone_number: profileData.phone_number,
        website_url: profileData.website_url,
        bio: profileData.bio,
        designation: profileData.designation,
        highest_degree: profileData.highest_degree,
        profile_image_preview: profileData.profile_image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, profile_image: file, profile_image_preview: imageUrl });
        }
    };

    const handleSubmit = async () => {
        console.log(formData)
        try {
            await updateProfile(formData)
            console.log('Profile updated successfully!');
            fetchProfile();
            onClose();
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <>
            <DarkMode>
                <IconButton rounded={'full'} size={'md'} colorScheme='blackAlpha' icon={<MdEdit />} onClick={() => onOpen()}></IconButton>
            </DarkMode>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent rounded={'1.5em'}>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Avatar src={formData.profile_image_preview} size="2xl" />
                        <VStack spacing={4} mt={4}>
                            <Input type="file" name="profile_image" accept="image/*" onChange={handleImageChange} variant={'flushed'} />
                            <FormControl id="firstName">
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" name="first_name" value={formData.first_name} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your first name</FormHelperText>
                            </FormControl>
                            <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" name="last_name" value={formData.last_name} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your last name</FormHelperText>
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" value={formData.email} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your email address</FormHelperText>
                            </FormControl>
                            <FormControl id="phoneNumber">
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your phone number</FormHelperText>
                            </FormControl>
                            <FormControl id="websiteURL">
                                <FormLabel>Website URL</FormLabel>
                                <Input type="url" name="website_url" value={formData.website_url} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your website URL</FormHelperText>
                            </FormControl>
                            <FormControl id="designation">
                                <FormLabel>Designation</FormLabel>
                                <Input type="text" name="designation" value={formData.designation} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your designation</FormHelperText>
                            </FormControl>
                            <FormControl id="highestDegree">
                                <FormLabel>Highest Degree</FormLabel>
                                <Input type="text" name="highest_degree" value={formData.highest_degree} onChange={handleChange} variant="flushed" />
                                <FormHelperText>Enter your highest degree</FormHelperText>
                            </FormControl>
                            <FormControl id="bio">
                                <FormLabel>Bio</FormLabel>
                                <Textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    variant="flushed"
                                    placeholder="Write a short bio about yourself"
                                    size="md"
                                />
                                <FormHelperText>Write a short bio about yourself</FormHelperText>
                            </FormControl>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="messenger" mr={3} rounded={'full'} fontWeight={'normal'} onClick={handleSubmit}>
                            Save
                        </Button>
                        <Button onClick={onClose} rounded={'full'} fontWeight={'normal'}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditInfo;
