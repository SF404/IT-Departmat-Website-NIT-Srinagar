import {
  Center,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SmallBanner from "./../../../Layout/SmallBanner";
import axios from "axios";
import * as XLSX from 'xlsx'
import SearchTable from "../../../components/Tables/SearchTable";

const Page = () => {
  const [excelData, setExcelData] = useState(null)
  const toast = useToast()

  useEffect(() => {
    const fetchData = async () => {
      console.log('hi')
      try {
        const response = await axios.get(`/api/public/fileget/?query=file&&type=management&&name=faculty_coordinators`);
        const data = response.data
        if (data.length <= 0) return;
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
            console.log(jsonData)
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
      }
    }
    return () => fetchData()
  }, [toast]);



  return (
    <>
      <SmallBanner image={null} heading={'FACULTY COORDINATORS'} />
      <Center>
        <VStack w={{ base: 'full', md: '90%', lg: '80%' }} bg={"white"} padding={'1em'} my={6} boxShadow={'sm'}>
          <SearchTable excelData={excelData} />
        </VStack>
      </Center>
    </>
  );
}

export default Page;
