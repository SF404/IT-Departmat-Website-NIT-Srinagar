import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { Box, Divider, List, ListIcon, ListItem, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { FcDownRight, FcExport, FcInfo } from 'react-icons/fc';
import './calendar.css'


function Calender() {
    const [Holidays, setHolidays] = useState(null);
    const handleViewChange = async ({ activeStartDate, view }) => {
        const activeMonth = activeStartDate.getMonth() + 1;
        try {
            const response = await axios.get(
                `/api/listholidays/?activeMonth=${activeMonth}`
            );
            if (response.data.length) setHolidays(response.data);
            else setHolidays(null);
        } catch (error) {
            console.error("Failed to fetch Holidays", error);
        }
    };
    useEffect(() => {
        handleViewChange({ activeStartDate: new Date() });
        console.log(Holidays)
    }, []);
    return (
        <Box w={'full'} height={'full'} bg={'white'} textAlign={'center'} borderRadius={'0.5em'} position={'relative'} boxShadow={'0 2px 8px rgba(0,0,0,0.05)'}>
            <Box bg={'#d8dcf0'} p={4} borderTopRadius={8} fontWeight={'semibold'} color={'darkblue'}>Calendar</Box>
            <Calendar onActiveStartDateChange={handleViewChange} showNeighboringMonth={false} />
            <Divider />
            {Holidays != null && (
                <Box w={"full"} p={2} bg={"white"}>
                    <List p={2} fontSize={'0.9em'}>
                        {Holidays.map((item) => (
                            <ListItem key={item.id}>
                                <ListIcon as={FcExport} color="green.500" />
                                {new Date(item.date).getDate().toString().padStart(2, "0")}{" "}
                                {item.description}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    )
}

export default Calender