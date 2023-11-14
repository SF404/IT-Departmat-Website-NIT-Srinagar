import React, { useRef, useState } from "react";
import * as XLSX from 'xlsx'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
    Box,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Input,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { PiDownloadDuotone } from "react-icons/pi";

const SearchTable = ({ excelData }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isDownloading, setIsDownloading] = useState(false);
    const tableRef = useRef();

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = excelData.slice(1).filter((row) =>
            row.some((cell) =>
                cell && cell.toString().toLowerCase().includes(query)
            )
        );

        setFilteredData(filtered);
    };

    const downloadTableAsExcel = async () => {
        setIsDownloading(true);
        const table = document.getElementById("myTable");
        const ws = XLSX.utils.table_to_sheet(table);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const fileName = "download.xlsx";
        await XLSX.writeFile(wb, fileName);
        setIsDownloading(false);
    };

    const downloadTableAsPDF = async () => {
        setIsDownloading(true)
        try {

            const table = tableRef.current;
            console.log(table)
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                marginBottom: 10,
            });

            const canvas = await html2canvas(table, { scale: 1 })
            const imgWidth = 190; // Adjust as needed
            const imgHeight = ((canvas.height * imgWidth) / canvas.width);
            console.log(canvas)
            console.log(imgHeight)
            const totalPages = Math.ceil(imgHeight / pdf.internal.pageSize.height);
            console.log(totalPages)

            for (let i = 0; i < totalPages; i++) {
                if (i > 0) {
                    pdf.addPage();
                }
                const positionY = -i * (pdf.internal.pageSize.height - 20);
                pdf.text('', 190, 285 + positionY);
                pdf.addImage(canvas, 'PNG', 10, positionY + 10, imgWidth, imgHeight);
            }

            pdf.save('download.pdf');
            setIsDownloading(false);
        }
        catch (error) {
            console.log(error)
        }

    };


    return (
        <>
            <TableContainer w={"full"}>
                <HStack justifyContent={"space-between"} my={4} position={"relative"}>
                    <HStack position={'sticky'} top={0} left={'100%'}>
                        <Input w={'200px'} mx={1} type="text" placeholder="Search..." value={searchQuery} onChange={(e) => handleSearch(e)} />
                        <Menu>
                            <MenuButton as={IconButton} variant={"outline"} color={'darkblue'} icon={isDownloading ? <Spinner /> : <PiDownloadDuotone />}></MenuButton>
                            <MenuList borderRadius={"none"} className="family-4" minW={'100px'} fontSize={'14px'}>
                                <MenuItem onClick={downloadTableAsExcel}>.xlsx</MenuItem>
                                <MenuItem onClick={downloadTableAsPDF}>.pdf</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </HStack>
                {excelData ? <Table variant="striped" w={"full"} id="myTable" ref={tableRef}>
                    <Thead w={"full"}>

                        <Tr bg={'#c5cae8'} mb={4}>
                            {excelData.length > 0 &&
                                excelData[0].map((cell, index) => (
                                    <Th key={index}>{cell}</Th>
                                ))}
                        </Tr>

                    </Thead>
                    <Tbody fontSize={'14px'} className="family-5">
                        {(searchQuery ? filteredData : excelData.slice(1)).map((row, rowIndex) => (
                            <Tr key={rowIndex} w={"full"}>
                                {row.map((cell, cellIndex) => (
                                    <Td key={cellIndex}>{cell}</Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table> : (<Box textAlign={"center"} m={4}><Spinner /><Text>Loading...</Text></Box>)}
            </TableContainer>
        </>
    );
};

export default SearchTable;
