import { useEffect, useState } from "react";
import {
  Center,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from "axios";
import * as XLSX from 'xlsx'
import SearchTable from "../../components/Tables/SearchTable";
import SmallBanner from "../../Layout/SmallBanner";
import image from './../../assets/banners/staff.webp';



function Staff() {
  const [excelData, setExcelData] = useState(null)
  const toast = useToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/public/fileget/?q=file&&type=management&&name=staff`);
        const data = response.data
        console.log(response.data)
        if (data.length <= 0) {
          toast({
            title: 'Data not Found',
            description: "Contact Administrator",
            status: 'info',
            duration: 5000,
            isClosable: true,
          })
          return;

        };
        const fileURL = data[0].file;
        const fileResponse = await axios.get(fileURL, { responseType: 'blob' });
        const blob = fileResponse.data;
        const file = new File([blob], 'table.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            setExcelData(jsonData);
          };
          reader.readAsBinaryString(file);
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setExcelData(null)
        console.error('Error fetching Excel file:', error);
      }
    }

    return () => fetchData();
  }, [toast]);
  return (
    <>
      <SmallBanner image={image} heading={'STAFF'} />
      <Center p={4}>
        <VStack width={{ base: '100%', md: '80%' }} m={4} bg={"white"} boxShadow={'0 0 2px rgba(0,0,0,0.05)'} p={4} borderRadius={4}>
          <SearchTable excelData={excelData} />
        </VStack>
      </Center>
    </>
  );
}
export default Staff;
