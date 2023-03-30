import {AddIcon, EditIcon, CheckIcon} from "@chakra-ui/icons";
import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  Text,
  Stack,
} from "@chakra-ui/react";
import React, {useState} from "react";
export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={<AddIcon />}
        left="0"
        position="fixed"
        size="lg"
        top="12"
        variant="solid"
        onClick={toggleDrawer}
      />
      <Drawer isOpen={isOpen} placement="left" size="sideBar" onClose={toggleDrawer}>
        <DrawerOverlay />
        <DrawerContent marginTop="12">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Notes</DrawerHeader>

          <DrawerBody>
            <VStack align="stretch">
              <Text fontWeight="bold" mb="2">
                Labels
              </Text>
              <Text>Personal</Text>
              <Text>Work</Text>
              <Text>Shopping List</Text>
              <Text fontWeight="bold" mb="2" mt="4">
                Archive
              </Text>
              <Text>2022</Text>
              <Text>2021</Text>
              <Text>2020</Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <IconButton aria-label="Edit" icon={<EditIcon />} variant="ghost" />
            <IconButton aria-label="Check" icon={<CheckIcon />} ml="auto" variant="solid" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
