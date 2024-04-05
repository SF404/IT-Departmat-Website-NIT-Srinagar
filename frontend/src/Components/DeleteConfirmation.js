import React from 'react';
import { Button, DarkMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

const DeleteConfirmationModal = ({ isOpen, onClose, itemName, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent rounded={'1.5em'}>
        <ModalHeader>Delete {itemName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to delete this {itemName}?
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} rounded={'full'} fontWeight={'normal'} onClick={onDelete}>
            Delete
          </Button>
          <Button onClick={onClose} rounded={'full'} fontWeight={'normal'}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmationModal;
