import { Box, Avatar, Divider, Stack, Text, HStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiAccountBoxFill } from "react-icons/ri";
import { FaImages, FaUsersGear } from "react-icons/fa6";
import { BsFileTextFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import { GiBookshelf } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import React, { useEffect, useState } from 'react';
import { getFacultyCourses } from '../../Api/api';

const Sidebar = ({ user }) => {
  const isAdmin = user.role === 'admin';

  const navLinks = [
    { path: '/dashboard', name: 'Dashboard', icon: <MdSpaceDashboard fontSize={'20px'} /> },
    { path: '/dashboard/myprofile', name: 'My Profile', icon: <RiAccountBoxFill fontSize={'20px'} /> },
    { path: '/dashboard/mycourses', name: 'My Courses', icon: <ImBooks fontSize={'20px'} /> },
    { path: '/dashboard/manage-accounts', name: 'Manage Users', icon: <FaUsersGear fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/manage-courses', name: 'Manage Courses', icon: <GiBookshelf fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/manage-students', name: 'Manage Students', icon: <MdSchool fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/manage-phd-scholars', name: 'Manage PhdScholars', icon: <MdSchool fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/manage-alumni', name: 'Manage Alumni', icon: <PiStudentFill fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/gallery', name: 'Manage Gallery', icon: <FaImages fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/events-announcements', name: 'Events & Announcements', icon: <RiCalendarEventFill fontSize={'20px'} />, condition: isAdmin },
    { path: '/dashboard/site-files', name: 'Site Files', icon: <BsFileTextFill fontSize={'20px'} />, condition: isAdmin },
  ];




  return (
    <Box w={'full'} p={4} color={'black'}>
      <HStack width={'full'} px={4} py={3} height={'70px'} borderRadius={16} bg={'blue.700'} color={'white'}>
        <Avatar size={'md'} />
        <Box>
          <Text fontWeight={'bold'} fontSize={'16px'}>{user.first_name}</Text>
          <Text fontWeight={'thin'} fontSize={'12px'}>{user.username}</Text>
        </Box>
      </HStack>
      <Divider></Divider>
      <Stack w={'full'} fontWeight={'normal'} fontSize={'14px'} fontFamily={'body'} spacing={0} mt={6}>
        {navLinks.map((link) => (
          (link.condition === undefined || link.condition) &&
          <NavLink key={link.path} end to={link.path} className={'link'}>
            <HStack pl={4}>
              {link.icon}
              <Text w={'full'} py={3} borderRadius={'full'}>
                {link.name}
              </Text>
            </HStack>
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
