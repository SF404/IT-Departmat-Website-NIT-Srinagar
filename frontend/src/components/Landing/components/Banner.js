import React, { useState, useEffect } from "react";
import { Box, Button, Center, Heading, IconButton, Text, flexbox } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import image1 from './../../../assets/images/image.webp'
import image2 from './../../../assets/images/spring.webp'
import image3 from './../../../assets/images/banner3.webp'


const images = [
    image1,
    image2,
    image3,
];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000); // Change images every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box className="banner" w="full"  position="relative" bg={"black"}>
            {images.map((image, index) => (
                <Box
                    key={index}
                    position="absolute"
                    width="100%"
                    height="100%"
                    background={`url(${image}) no-repeat center center/cover`}
                    opacity={index === currentImageIndex ? 1 : 0}
                    transition="opacity 0.5s"
                    backgroundAttachment={"fixed"}

                />
            ))}
            <Box
                display={{base:"none", md:"flex"}}
                justifyContent="space-between"
                alignItems={"center"}
                h={"full"}
                position="absolute"
                left="0"
                right="0"
                bg={'rgba(0,0,0,0.1)'}
                
            >
                <IconButton zIndex={6} borderRadius={"full"} m={4} colorScheme="whiteAlpha" onClick={handlePrevClick} aria-label='previous' icon={<ChevronLeftIcon />} />
                <IconButton zIndex={6} borderRadius={"full"} m={4} colorScheme="whiteAlpha" onClick={handleNextClick} aria-label='next' icon={<ChevronRightIcon />} />
            </Box>
            <Box zIndex={5} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} w={"full"} h={"full"} position={"absolute"} left={0} right={0} className="family-1" color={"white"}>
                <Heading size={{base: "lg",sm:"xl",md:"xl", lg:"2xl"}} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" >INFORMATION TECHNOLOGY</Heading>
                <Text mt={2} fontSize={{base: "x-small",sm:"sm", lg:"md"}} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" fontWeight={"semibold"}>NATIONAL INSTITUTE OF TECHNOLOGY SRINAGAR</Text>
                

            </Box>
        </Box>
    );
};

export default Banner;
