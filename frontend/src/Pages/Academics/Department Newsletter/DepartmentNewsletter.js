import React from "react";
import {  Center, Box } from "@chakra-ui/react";
import SmallBanner from  "./../../../Layout/SmallBanner";

function DepartmentNewsletter() {
  return (
    <>
      <SmallBanner heading={'NEWSLETTER'}/>
      <Center>
        <Box p={4}>NO Newsletter</Box>
      </Center>


    </>
  );
}

export default DepartmentNewsletter;
