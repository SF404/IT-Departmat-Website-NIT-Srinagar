import React from "react";
import {  Center, Box } from "@chakra-ui/react";
import SmallBanner from "../../../Components/SmallBanner";

function DepartmentNewsletter() {
  return (
    <>
      <SmallBanner heading={'NEWSLETTER'}/>
      <Box minH={'100vh'}>
        <Box p={4} mx={'auto'} textAlign={"center"}>NO Newsletter</Box>
      </Box>


    </>
  );
}

export default DepartmentNewsletter;
