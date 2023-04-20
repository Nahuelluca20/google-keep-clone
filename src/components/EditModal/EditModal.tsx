import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {shallowEqual, useSelector} from "react-redux";

import InputTag from "./InputTag";
import Taglist from "./Taglist";

export interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const EditModal: React.FC<EditModalProps> = ({isOpen, onClose}) => {
  const tags = useSelector((state: any) => state.tag.tags, shallowEqual);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={"395px"} width={"300px"}>
          <ModalHeader height={10}>
            <Text color={"#202124"} fontSize={"1rem"} fontWeight={500}>
              Editar etiquetas
            </Text>
          </ModalHeader>
          <ModalBody px={"15px"}>
            <InputTag />
            <Taglist tags={tags} />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              fontSize={"0.875rem"}
              fontWeight={500}
              mr={3}
              variant={"unstyled"}
              onClick={onClose}
            >
              Finalizado
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
