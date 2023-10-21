import { Box, Image } from "@chakra-ui/react";
import React from "react";
import img from "../../assets/images/image.png";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Box minH={'90vh'}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
