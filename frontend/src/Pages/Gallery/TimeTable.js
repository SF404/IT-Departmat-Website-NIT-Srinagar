import { Box, Divider, IconButton, Image, MenuDivider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, Tooltip, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SmallBanner from "../../Layout/SmallBanner";
import axios from 'axios';
import { PiDownloadDuotone } from 'react-icons/pi';
import image from '../../assets/banners/a2.webp';


const formatFileName = (name) => {
    const parts = name.split('_');
    if (parts.length == 2) {
        return `Time Table for ${parts[0]} ${parts[1]}`;
    }
    return `Time Table for ${parts[0]} Group ${parts[1]} ${parts[2]}`;
};

function TimeTable() {


    const OpenTable = (src, key) => {
        // setActiveImage({ src: src, key: key })
        // onOpen()
    }

    const [images, setImages] = useState(null)


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`/api/public/fileget/?type=timetable`);
                console.log(response.data)
                setImages(response.data)
                console.log(images);
            } catch (error) {
                console.log(error)
            }
        }
        return () => fetchImages();
    }, [])

    return (
        <>
            <SmallBanner image={image} heading={'TimeTable'} />
            <Box p={{ base: '1em', md: '2em', lg: '3em' }} bg={'white'}>
                {images ? (
                    images.length > 0 ? (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '1em 1em', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Name</th>
                                    <th style={{ padding: '1em 1em', textAlign: 'center', borderBottom: '1px solid #ccc' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {images.map((item, index) => (
                                    <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                                        <td style={{ padding: '1em 1em' }}>{formatFileName(item.name)}</td>
                                        <td style={{ padding: '1em 1em', textAlign: 'center' }}>
                                            <Tooltip label={item.name}>
                                                <IconButton icon={<PiDownloadDuotone />} onClick={() => window.open(item.file, '_blank')} />
                                            </Tooltip>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <Box textAlign={'center'} mt={4}>
                            <h1>No Files Found</h1>
                        </Box>
                    )
                ) : (
                    <Box textAlign={'center'} mt={4}>
                        <Spinner />
                        <Text>Loading...</Text>
                    </Box>
                )}
            </Box >



        </>
    )
}


export default TimeTable