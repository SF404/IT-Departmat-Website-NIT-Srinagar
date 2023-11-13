import { Box,  Image, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalHeader, ModalOverlay, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SmallBanner from "../../Layout/SmallBanner";
import axios from 'axios';

function ImageGallery() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeImage, setActiveImage] = useState({ src: '', key: 0, })


    const expandImage = (src, key) => {
        setActiveImage({ src: src, key: key })
        onOpen()
    }

    const [images, setImages] = useState(null)

    const fetchImages = async () => {
        try {
            const response = await axios.get(`/api/public/galleryget/`);
            console.log(response.data)
            setImages(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        fetchImages();
    }, [])

    return (
        <>
            <SmallBanner heading={'GALLERY'} />
            <Box p={{ base: '1em', md: '2em', lg: '3em' }} bg={'white'}>
                {images ? (images.length > 0 ? (<ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1020: 4 }}
                >
                    <Masonry gutter='1em'>
                        {
                            images.map((item, index) => (
                                <Box bg={'black'} overflow={'hidden'} borderRadius={'0.3em'}>
                                    <Image key={index} loading="lazy" src={item.image} alt="" style={{ width: '100%', display: 'block', transition: '0.15s ease-in', }} cursor={'pointer'}
                                        _hover={{ opacity: 0.8, transform: 'scale(1.1)' }}
                                        onClick={() => expandImage(item.image, index)}
                                    />
                                </Box>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>) : (<Box textAlign={'center'} w={'full'} m={4}>No Images...</Box>)) : (<Box textAlign={'center'} m={4}><Spinner /><Text>Loading...</Text></Box>)
                }
            </Box>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg={'rgba(255,255,255, 0.5)'} backdropFilter={'blur(4px)'}>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton color={'white'} />
                    <ModalBody w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Image src={activeImage.src} m={'auto'} maxH={'90vh'} maxW={{ base: '100%', md: '90%' }}></Image>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ImageGallery