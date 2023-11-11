import React, { useState } from "react";
import * as XLSX from 'xlsx'
import {
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";
import SmallBanner from "../../Layout/SmallBanner";
import SearchTable from "../../components/Tables/SearchTable";

const PlacementBrochure = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
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
  }

  return (
    <>
      <SmallBanner heading={"TRAINING AND PLACEMENT"} />

      <Center>
        <VStack
          width={{ base: "full", lg: "80%" }}
          bg={"white"}
          spacing={8}
          p={4}
          boxShadow={'0 0 6px rgba(0,0,0,0.05)'}
          borderRadius={'0.5em'}
          m={4}
        >
          <Button bg={'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'} class="splash-button" role="button">Placement Brochure</Button>
          <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
          <SearchTable excelData={excelData}/>

        </VStack>
      </Center >

    </>
  );
};

export default PlacementBrochure;
