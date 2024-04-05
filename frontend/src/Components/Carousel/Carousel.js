import React, { useState, useEffect } from "react";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import image1 from './../../Assets/banners/a0.jpg'
import image3 from './../../Assets/banners/a1.webp'
import image5 from './../../Assets/banners/a3.webp'
import image6 from './../../Assets/banners/a4.jpg'

const images = [
    image1,
    image3,
    image5,
    image6,
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000);
        setIntervalId(id);

        return () => {
            clearInterval(id);
        };
    }, []);

    const handlePrevClick = () => {
        clearInterval(intervalId);
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        clearInterval(intervalId);
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box position="relative" overflow={"hidden"} w="full" aspectRatio={{ base: 3 / 2, md: 3 / 1 }}>
            <Box
                height={'100%'}
                display="flex"
                transition="transform 1s ease"
                transform={`translateX(-${currentImageIndex * 100}%)`}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        flex="0 0 100%"
                        height="100%"
                        background={`url(${image}) no-repeat center center/cover`}
                    />
                ))}
            </Box>
            <Flex
                bg={'rgba(0,0,0,0.0)'}
                width={'full'}
                height={'full'}
                alignItems="center"
                position="absolute"
                left="0"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                p={10}
            >
                <Box color={"white"} fontSize={{ base: '8px', sm: '11px', md: '14px', lg: '20px' }} textShadow="4px 4px 8px rgba(0, 0, 0, 0.5)" pl={10} mt={-10} >
                    <Text fontSize={'3em'} fontWeight={'bolder'} lineHeight={'1.3em'} >
                        Department of <br />
                        Information Technology
                    </Text>
                    NATIONAL INSTITUTE OF TECHNOLOGY | SRINAGAR
                </Box>
            </Flex>
            <Box
                display={{ base: "none", md: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                position="absolute"
                left="0"
                right="0"
                top="50%"
                transform="translateY(-50%)"
            >
                <IconButton zIndex={6} borderRadius="full" m={4} fontSize="1.5em" colorScheme="blackAlpha" onClick={handlePrevClick} aria-label="previous" icon={<ChevronLeftIcon />} />
                <IconButton zIndex={6} borderRadius="full" m={4} fontSize="1.5em" colorScheme="blackAlpha" onClick={handleNextClick} aria-label="next" icon={<ChevronRightIcon />} />
            </Box>
            <Box
                zIndex={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                left={0}
                right={0}
                color="white"
                bottom={8}
            >
                <Flex gap={1} justifyContent={"center"}>
                    {images.map((_, index) => (
                        <Box
                            transition={'all 0.2s ease-in-out'}
                            cursor={'pointer'}
                            boxSize={'10px'}
                            key={index}
                            bg={'white'}
                            rounded={'full'}
                            width={index === currentImageIndex ? "32px" : "10px"}
                            onClick={() => setCurrentImageIndex(index)}
                        ></Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default Carousel;
