import { Box, Button, Flex, HStack, SimpleGrid, Stack, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddDownload from './components/AddDownloads'
import AddTimeTable from './components/AddTimeTable'
import AddPlacementBrochure from './components/AddPlacementBrochure'
import { deleteSiteFile, getSiteFilesByCategory } from '../../Api/api'
import { FcFile } from "react-icons/fc";
import { MdTableBar } from 'react-icons/md'
import DeleteConfirmationModal from '../../Components/DeleteConfirmation'


const SiteFiles = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [targetDelete, setTargetDelete] = useState('');

    const [downloads, setDownloads] = useState([])
    const [time_tables, setTime_tables] = useState([])
    const [placementBrochure, setPlacementBrochure] = useState([])

    const fetchSiteFiles = async () => {
        try {
            const fetchedData = await getSiteFilesByCategory();
            const downloads = fetchedData.filter((item) => item.category === 'downloads')
            const time_tables = fetchedData.filter((item) => item.category === 'time_tables')
            const placement_brochure = fetchedData.filter((item) => item.category === 'placement_brochure')
            setDownloads(downloads);
            setTime_tables(time_tables)
            setPlacementBrochure(placement_brochure)
            console.log(downloads)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSiteFiles();
    }, [])

    const handleDeleteClick = (item) => {
        setTargetDelete(item);
        setIsOpenDelete(true);
    };

    const handleDelete = async () => {
        try {
            await deleteSiteFile(targetDelete.id)
            fetchSiteFiles();
            setIsOpenDelete(false);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleDownload = (url) => {
        window.open(url, '_blank');
    };


    return (
        <>
            <SimpleGrid columns={[1, 1, 1, 3]} gap={4}>
                <Box p={4} rounded={24} bg={'white'}
                    _hover={{ boxShadow: 'md' }} transition={'all 0.1s ease-in'}
                >
                    <Flex mb={2}>
                        <Text fontSize={'lg'}>Downloads</Text>
                    </Flex>
                    <AddDownload fetchSiteFiles={fetchSiteFiles}/>

                    <Table mt={2}>
                        <Tbody>
                            {
                                downloads.map((item) => (
                                    <Tr>
                                        <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                        <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.file)} _hover={{color:'blue'}} cursor={'pointer'}>{item.title}</Td>
                                        <Td px={1} py={2} fontSize={'14px'}>{item.metadata?.semester}</Td>
                                        <Td p={0} textAlign={'right'}>
                                            <Button size={'xs'} colorScheme='red' variant={'outline'} onClick={()=>handleDeleteClick(item)}>Delete</Button>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>


                </Box>
                <Box p={4} rounded={24} bg={'white'}
                    _hover={{ boxShadow: 'md' }} transition={'all 0.1s ease-in'}
                >
                    <Flex mb={2}>
                        <Text fontSize={'lg'}>Time Tables</Text>
                    </Flex>
                    <AddTimeTable fetchSiteFiles={fetchSiteFiles} />
                    <Table mt={2}>
                        <Tbody>
                            {
                                time_tables.map((item) => (
                                    <Tr>
                                        <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                        <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.file)} _hover={{color:'blue'}} cursor={'pointer'}>{item.title}</Td>
                                        <Td p={0} textAlign={'right'}>
                                            <Button size={'xs'} colorScheme='red' variant={'outline'} onClick={()=>handleDeleteClick(item)}>Delete</Button>

                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </Box>
                <Box p={4} rounded={24} bg={'white'}
                    _hover={{ boxShadow: 'md' }} transition={'all 0.1s ease-in'}
                >
                    <Flex mb={2}>
                        <Text fontSize={'lg'}>Placement Brochure</Text>
                    </Flex>
                    <AddPlacementBrochure fetchSiteFiles={fetchSiteFiles}/>
                    <Table mt={2}>
                        <Tbody>
                            {
                                placementBrochure.map((item) => (
                                    <Tr>
                                        <Td p={0}> <FcFile fontSize={'18px'} /></Td>
                                        <Td px={1} py={2} fontSize={'14px'} onClick={() => handleDownload(item.file)} _hover={{color:'blue'}} cursor={'pointer'}>{item.title}</Td>
                                        <Td p={0} textAlign={'right'}>
                                            <Button size={'xs'} variant={'outline'} colorScheme='red' onClick={()=>handleDeleteClick(item)}>Delete</Button>

                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </Box>

            </SimpleGrid>
            <DeleteConfirmationModal
                isOpen={isOpenDelete}
                onClose={() => setIsOpenDelete(false)}
                itemName={targetDelete ? targetDelete.title : ''}
                onDelete={handleDelete}
            />
        </>
    )
}

export default SiteFiles