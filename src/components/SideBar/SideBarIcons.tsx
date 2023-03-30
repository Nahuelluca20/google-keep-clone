import {HStack, Stack, Text} from "@chakra-ui/react";
import {useState} from "react";

import {ButtonSVG} from "../Buttons";

import NotesSvg from "@/assets/notes.svg";
import ReminderSvg from "@/assets/reminder.svg";
import EditSvg from "@/assets/edit.svg";
import TagSvg from "@/assets/tag.svg";
import TrashSvg from "@/assets/trash.svg";
import ArchiveSvg from "@/assets/archive.svg";

interface Props {
  toggleDrawer: () => void;
}

const SideBarIcons: React.FC<Props> = ({toggleDrawer}) => {
  const [bgColor, setBgColor] = useState("transparent");

  const handleColorChange = () => {
    toggleDrawer();
    if (bgColor === "transparent") {
      setBgColor("#feefc3");
    } else {
      setBgColor("transparent");
    }
  };

  return (
    <>
      <Stack mt={3} spacing={2} w={"100%"}>
        <HStack
          backgroundColor={bgColor}
          borderRightRadius={"40px"}
          pl={2}
          py={1}
          w={"280px"}
          onClick={() => handleColorChange()}
        >
          <ButtonSVG image={NotesSvg} toggleDrawer={toggleDrawer} />
          <Text>Notas</Text>
        </HStack>
        <HStack
          backgroundColor={bgColor}
          borderRightRadius={"40px"}
          pl={2}
          py={1}
          w={"280px"}
          onClick={() => handleColorChange()}
        >
          <ButtonSVG image={ReminderSvg} toggleDrawer={toggleDrawer} />
        </HStack>
        <HStack
          backgroundColor={bgColor}
          borderRightRadius={"40px"}
          pl={2}
          py={1}
          w={"280px"}
          onClick={() => handleColorChange()}
        >
          <ButtonSVG image={TagSvg} toggleDrawer={toggleDrawer} />
        </HStack>
        <HStack
          backgroundColor={bgColor}
          borderRightRadius={"40px"}
          pl={2}
          py={1}
          w={"280px"}
          onClick={() => handleColorChange()}
        >
          <ButtonSVG image={EditSvg} toggleDrawer={toggleDrawer} />
        </HStack>
        <HStack
          backgroundColor={bgColor}
          borderRightRadius={"40px"}
          pl={2}
          py={1}
          w={"280px"}
          onClick={() => handleColorChange()}
        >
          <ButtonSVG image={ArchiveSvg} toggleDrawer={toggleDrawer} />
        </HStack>
        <HStack
          backgroundColor={bgColor}
          borderRightRadius={"40px"}
          pl={2}
          py={1}
          w={"280px"}
          onClick={() => handleColorChange()}
        >
          <ButtonSVG image={TrashSvg} toggleDrawer={toggleDrawer} />
        </HStack>
      </Stack>
    </>
  );
};

export default SideBarIcons;
