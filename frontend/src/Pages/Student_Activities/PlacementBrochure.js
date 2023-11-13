import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import {
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";
import SmallBanner from "../../Layout/SmallBanner";
import SearchTable from "../../components/Tables/SearchTable";
import axios from "axios";

const PlacementBrochure = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (file) => {
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(jsonData);
      };
      reader.readAsBinaryString(file);
    }
  }

  const fetchExcelFromDatabase = async () => {
    try {
      const response = await axios.get(`/api/public/fileget/?name=placement_record`);
      console.log(response.data[0]);
  
      const fileURL = response.data[0].file;
      console.log("File URL:", fileURL);
  
      // Fetch the blob data from the file URL
      const fileResponse = await axios.get(fileURL, { responseType: 'blob' });
      const blob = fileResponse.data;
      console.log("Fetched Blob:", blob);
  
      // Create a File object
      const file = new File([blob], 'table.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      console.log(file);
  
      handleFileChange(file);
    } catch (error) {
      console.error('Error fetching Excel file:', error);
    }
  }
  

  useEffect(() => {
    fetchExcelFromDatabase();
  }, []);

  return (
    <>
      <SmallBanner heading={"TRAINING AND PLACEMENT"} />

      <Center>
        <VStack
          width={{ base: "full", lg: "80%" }}
          bg={"white"}
          spacing={8}
          p={4}
          boxShadow={"0 0 6px rgba(0,0,0,0.05)"}
          borderRadius={"0.5em"}
          m={4}
        >
          <Button bg={'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'} class="splash-button" role="button">Placement Brochure</Button>
          <SearchTable excelData={excelData} />
        </VStack>
      </Center>
    </>
  );
};

export default PlacementBrochure;
