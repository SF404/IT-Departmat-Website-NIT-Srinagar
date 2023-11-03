import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function ImageGallery() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeImage, setActiveImage] = useState({
        src: '',
        key: 0,
    })

    const expandImage = (src, key) => {
        setActiveImage({src:src, key:key})
        onOpen()
      }

    const images = [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 420,
            height: 254,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 174,
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
        },
    ];
    return (
        <>
            <Box p={{ base: '1em', md: '2em', lg: '3em' }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1020: 4 }}
                >
                    <Masonry gutter='1em'>
                        {
                            images.map((item, index) => (
                                <Box bg={'black'} overflow={'hidden'} borderRadius={'0.3em'}>
                                    <Image key={index} src={item.src} alt="" style={{     width: '100%',     display: 'block',     transition: '0.2s ease-in', }} cursor={'pointer'}
                                        _hover={{ opacity: 0.6, transform: 'scale(1.1)' }}
                                        onClick={()=>expandImage(item.src, index)}
                                    />
                                </Box>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </Box>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg={'rgba(255,255,255, 0.5)'} backdropFilter={'blur(4px)'}>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton color={'white'}/>
                    <ModalBody w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Image src={activeImage.src} m={'auto'} maxH={'90vh'} maxW={{base:'100%', md:'90%'}}></Image>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ImageGallery