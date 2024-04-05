import {
  Center,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import * as XLSX from 'xlsx'
import SmallBanner from "../../../Components/SmallBanner";
// import SearchTable from "../../../Components/Tables/SearchTable";

const Page = () => {
  const [excelData, setExcelData] = useState(null)

  return (
    <>
      <SmallBanner image={null} heading={'FACULTY COORDINATORS'} />
      <Center>
        <VStack w={{ base: 'full', md: '90%', lg: '80%' }} bg={"white"} padding={'1em'} my={6} boxShadow={'sm'}>
          {/* <SearchTable excelData={excelData} /> */}
        </VStack>
      </Center>
    </>
  );
}

export default Page;
