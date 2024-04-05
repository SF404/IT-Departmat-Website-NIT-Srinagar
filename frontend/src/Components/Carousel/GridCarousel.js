import React, { useState } from "react";
import { Box, Button, DarkMode, Flex, HStack, IconButton, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const GridCarousel = ({showDots = true, title1, title2, GridTile, items=[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 3, xl: 4 });

    const groupedItems = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
        groupedItems.push({
            index: Math.floor(i / itemsPerSlide),
            items: items.slice(i, i + itemsPerSlide),
        });
    }

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? groupedItems.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === groupedItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box overflow="hidden" w="full">
            <Flex justifyContent={'space-between'} py={2} alignItems={'center'}>
                <Flex fontWeight={'semibold'} gap={2} fontSize={'24px'} justifyContent={'center'} my={2}>
                    <Text color={'darkblue'}>{title1}</Text>
                    <Text color={'blackAlpha'}>{title2}</Text>
                </Flex>
                <HStack>
                    <DarkMode>
                        <IconButton
                            zIndex={6}
                            borderRadius="full"
                            fontSize="1.5em"
                            onClick={handlePrevClick}
                            colorScheme="blackAlpha"
                            icon={<ChevronLeftIcon />}
                        />
                        <IconButton
                            zIndex={6}
                            borderRadius="full"
                            fontSize="1.5em"
                            onClick={handleNextClick}
                            colorScheme="blackAlpha"
                            icon={<ChevronRightIcon />}
                        />
                    </DarkMode>

                </HStack>

            </Flex>
            <Box
                display="flex"
                transition="transform 0.3s ease"
                transform={`translateX(-${currentIndex * 100}%)`}
            >
                {groupedItems.map((group) => (
                    <SimpleGrid key={group.index} columns={[1, 2, 2, 3, 4]} gap={4} flex="0 0 100%">
                        {group.items.map((item, index) => (
                            <GridTile key={index} item={item} />
                        ))}
                    </SimpleGrid>
                ))}
            </Box>



            {showDots && <Flex gap={0.5} p={6} justifyContent={"center"}>
                {groupedItems.map((group, index) => (
                    <Box
                        transition={'all 0.2s ease-in-out'}
                        cursor={'pointer'}
                        boxSize={'10px'}
                        key={group.index}
                        bg={'gray.200'}
                        rounded={'full'}
                        width={index === currentIndex ? "32px" : "10px"}
                        onClick={() => setCurrentIndex(group.index)}
                    ></Box>
                ))}
            </Flex>}
        </Box>
    );
};

export default GridCarousel;
