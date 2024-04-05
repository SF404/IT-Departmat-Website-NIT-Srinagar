import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, DarkMode, Divider, Flex, IconButton, Link, List, ListIcon, ListItem, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddAnnouncement from './AddAnnouncement'
import { getAnnouncements, deleteAnnouncement } from '../../../Api/api'; // Import deleteAnnouncement from your API file
import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import EditAnnouncement from './EditAnnouncement';
import DeleteConfirmationModal from '../../../Components/DeleteConfirmation'; // Import the DeleteConfirmationModal component
import { MdDelete } from 'react-icons/md';
import OptionsPopover from '../../../Components/OptionsPopover';

const Announcements = () => {
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const [targetDelete, setTargetDelete] = useState('');
    const [announcements, setAnnouncements] = useState([]);

    const fetchAnnouncements = async () => {
        try {
            const fetchedAnnouncements = await getAnnouncements();
            setAnnouncements(fetchedAnnouncements);
            console.log(fetchedAnnouncements);
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const handleDeleteClick = (id, title) => {
        setTargetDelete({ id, title });
        onOpenDelete();
    };

    const handleDelete = async () => {
        try {
            await deleteAnnouncement(targetDelete.id);
            fetchAnnouncements(); 
            onCloseDelete();
        } catch (error) {
            console.error('Error deleting announcement:', error);
        }
    };

    return (
        <Box w={'full'}>
            <Accordion allowMultiple>
                <AccordionItem bg={'white'} rounded={16}>
                    <AccordionButton p={4} rounded={16}>
                        <Flex alignItems={'center'} fontFamily={'exo'} fontWeight={'bold'} gap={4} justifyContent={'space-between'} w={'full'} mr={3}>
                            <Text>Announcements</Text>
                            <AddAnnouncement />
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <Divider />
                    <AccordionPanel p={0}>
                        <List w={'full'} bg={'white'} rounded={16} as={Stack} gap={4} p={4}>
                            {announcements.map((item) => (
                                <ListItem as={Flex} justifyContent={'space-between'} key={item.id}>
                                    <Box>
                                        <ListIcon as={FaCanadianMapleLeaf} fontSize={'24px'} color='brown' />
                                        <Link href={item.url} target='_blank'>
                                            {item.title}
                                        </Link>
                                    </Box>
                                    <Flex gap={2} opacity={1} justifyContent={'right'}>
                                        <OptionsPopover>
                                            <EditAnnouncement id={item.announcement_id} data={item} />
                                            <Button
                                                leftIcon={<MdDelete />}
                                                variant={'ghost'}
                                                size={'sm'}
                                                justifyContent={'left'}
                                                rounded={0}
                                                onClick={() => handleDeleteClick(item.announcement_id, item.title)}
                                            >Delete</Button>
                                        </OptionsPopover>
                                    </Flex>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <DeleteConfirmationModal
                isOpen={isOpenDelete}
                onClose={onCloseDelete}
                itemName={targetDelete.title}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default Announcements;
