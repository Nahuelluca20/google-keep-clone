import {
  Image,
  HStack,
  Stack,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import {useState} from "react";
import {ReactSVG} from "react-svg";
import {useDispatch} from "react-redux";
import {SearchIcon} from "@chakra-ui/icons";

import MenuTagsCheckBoxes from "./MenuTagsCheckBoxes";

import {Tags} from "@/components";
import PinSvg from "@/assets/pin.svg";
import PinedSvg from "@/assets/pined.svg";
import Reminder from "@/assets/reminder-note.svg";
import DotMenu from "@/assets/dotMenu.svg";
import Arhive from "@/assets/archive-note.svg";
import {deleteNoteById} from "@/redux/slices/notesSlice";
import {AppDispatch} from "@/redux";

export interface NotesProps {
  content: string;
  tags: string[];
  title: string;
  id: number;
}

const Notes: React.FC<NotesProps> = ({tags, title, content, id}) => {
  const [checked, setChecked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleColorChange = () => {
    setChecked(!checked);
  };

  const handleDeleteNote = async () => {
    await dispatch(deleteNoteById(id));
  };

  return (
    <Stack
      border={"1px solid #e0e0e0"}
      borderRadius={"8px"}
      boxShadow={hovering ? "lg" : "none"}
      mx={[0, "16px"]}
      my={["16px"]}
      p={4}
      width={["100%", "100%", "240px"]}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <HStack justifyContent={"space-between"}>
        <Text fontSize="18px" fontWeight={600}>
          {title}
        </Text>
        <Box
          alignItems={"center"}
          borderRadius={"full"}
          color="white"
          cursor={"pointer"}
          display={"flex"}
          height={"10px"}
          justifyContent="center"
          p={1}
          transition="all 0.1s"
          visibility={hovering || checked ? "visible" : "hidden"}
          width={"10px"}
          onClick={handleColorChange}
        >
          <ReactSVG src={checked ? PinedSvg : PinSvg} />
        </Box>
      </HStack>
      <Text fontSize={"14px"} w={"100%"}>
        {content}
      </Text>
      <Box display={"flex"} flexWrap="wrap">
        {tags.map((tag) => (
          <Tags key={tag} text={tag} />
        ))}
      </Box>

      <HStack
        justifyContent="space-between"
        pb={1}
        transition="all 0.1s"
        visibility={hovering ? "visible" : "hidden"}
      >
        <HStack spacing={[5, 6]}>
          <Image cursor={"pointer"} height={"20px"} src={Reminder} width={"20px"} />
          <Image cursor={"pointer"} height={"20px"} src={Arhive} width={"20px"} />
          <Menu onClose={() => setShowTags(false)}>
            <MenuButton>
              <Image cursor={"pointer"} height={"18px"} src={DotMenu} width={"18px"} />
            </MenuButton>
            <Portal>
              <MenuList w={"225px"}>
                {showTags ? (
                  <>
                    <MenuTagsCheckBoxes tagsProps={tags} />
                  </>
                ) : (
                  <>
                    <MenuItem onClick={() => handleDeleteNote()}>
                      <Text color={"#3c4043"} fontSize={"14px"}>
                        Borrar la nota
                      </Text>
                    </MenuItem>
                    <MenuItem closeOnSelect={false} onClick={() => setShowTags(true)}>
                      <Text color={"#3c4043"} fontSize={"14px"}>
                        Cambiar etiquetas
                      </Text>
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Portal>
          </Menu>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Notes;
