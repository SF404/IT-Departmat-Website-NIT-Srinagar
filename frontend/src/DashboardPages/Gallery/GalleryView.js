import React, { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid, Button, Flex, Text, IconButton } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { deleteImageFromGallery, getGallery } from '../../Api/api';
import AddImageToGallery from './components/AddImageToGallery';
import { MdDelete } from 'react-icons/md';
import DeleteConfirmationModal from '../../Components/DeleteConfirmation'; // Import the DeleteConfirmationModal component
import Masonry from 'react-layout-masonry';

const GalleryView = () => {
    const [gallery, setGallery] = useState([]);
    const { id } = useParams();
    const [deleteImageId, setDeleteImageId] = useState(null);
    const [isOpenDelete, setIsOpenDelete] = useState(false); // State to control delete confirmation modal

    const fetchImagesData = async () => {
        try {
            const fetchedImages = await getGallery(id);
            setGallery(fetchedImages);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchImagesData();
    }, []);

    const handleDeleteImage = async () => {
        try {
            await deleteImageFromGallery(deleteImageId);
            fetchImagesData();
            setIsOpenDelete(false); // Close the delete confirmation modal after successful deletion
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <Flex mb={4}>
                <Box>
                    <Text fontWeight={'bold'}>{gallery.title} - Gallery</Text>
                    <Text fontSize={'14px'}>{gallery.description}</Text>
                    <Text fontSize={'14px'}>{formatDate(gallery.created_at)}</Text>
                    <AddImageToGallery galleryId={id} fetchImagesData={fetchImagesData} />
                </Box>
            </Flex>
            <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 3 }} gap={16}>
                {gallery.images?.map((item) => (
                    <Box key={item.id} overflow="hidden" textAlign={'right'}>
                        <a href={item.image} download={`Image_${item.id}`} target="_blank" rel="noopener noreferrer">
                            <Image src={item.image} alt={`Image ${item.id}`}/></a>
                        <Button icon={<MdDelete />} onClick={() => { setDeleteImageId(item.id); setIsOpenDelete(true); }}
                            mt={-16} mr={2} size="xs" colorScheme="red" rounded={'full'}>Delete</Button>
                    </Box>
                ))}
            </Masonry>
            <DeleteConfirmationModal isOpen={isOpenDelete} onClose={() => setIsOpenDelete(false)} itemName="this image" onDelete={handleDeleteImage} />
        </>
    );
};

export default GalleryView;
