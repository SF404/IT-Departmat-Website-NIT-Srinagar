import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Divider,
  } from '@chakra-ui/react'

function ProfileModal({isOpen, onClose, user}) {
    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'3xl'} >
                <ModalOverlay  backdropFilter='auto' backdropBlur='2px'/>
                <ModalContent zIndex={999}>
                    <ModalHeader>My Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {user.name}
                        <Divider></Divider>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero placeat facere eveniet dolore quas, reiciendis ipsum. Libero veniam ea, incidunt rerum corporis, est ducimus totam quasi, nemo laboriosam in.
                        
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Save
                        </Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal;