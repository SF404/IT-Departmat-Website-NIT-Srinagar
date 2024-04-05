import { Box, Button, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SmallBanner from '../../Components/SmallBanner'
import { getSiteFiles } from '../../Api/public_api'

const Downloads = () => {
    const [downloads, setDownloads] = useState([])
    const fetchDownloads = async () => {
        try {
            const data = await getSiteFiles('downloads')
            console.log(data)
            setDownloads(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDownloads();
    }, [])

    const formatDate = (d) => {
        const date = new Date(d);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
    }
    const handleDownload = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Box w={'full'} minH={'100vh'} bg={'white'}>
            <SmallBanner heading={"Downloads"} />
            <Box w={'full'} p={4}>
                <TableContainer w={{ base: 'full', md: '80%' }} mx={'auto'} mt={4}>
                    <Table>
                        <Tbody fontSize={'14px'}>
                            {
                                downloads.map((item) => (
                                    <Tr>
                                        <Td pl={0}>{item.title}</Td>
                                        <Td>{formatDate(item.created_at)}</Td>
                                        <Td textAlign={'right'} pr={0}>
                                            <Button size={'sm'} variant={'outline'} colorScheme='facebook' onClick={() => handleDownload(item.file)}>Download</Button>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>

            </Box>


        </Box>
    )
}

export default Downloads