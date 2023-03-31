import {HStack, Stack, Text} from "@chakra-ui/react";
import {useSelector, useDispatch} from "react-redux";

import {ButtonSVG} from "../Buttons";

import NotesSvg from "@/assets/notes.svg";
import ReminderSvg from "@/assets/reminder.svg";
import EditSvg from "@/assets/edit.svg";
import TagSvg from "@/assets/tag.svg";
import TrashSvg from "@/assets/trash.svg";
import ArchiveSvg from "@/assets/archive.svg";
import {change} from "@/redux/states/navbarState";
import {RootState} from "@/redux";

interface Props {}

const SideBarIcons: React.FC<Props> = ({}) => {
  const nav = useSelector((state: RootState) => state.navbar.value);
  const openMenu = useSelector((state: RootState) => state.navbar.openMenu);
  const dispatch = useDispatch();
  const handleColorChange = (value: string) => {
    dispatch(change(value));
  };

  return (
    <>
      <Stack
        boxShadow={
          openMenu
            ? `x -1px rgba(0,0,0,.2);
        box-shadow: 0 16px 10px 0 rgba(0,0,0,.14), 0 11px 18px 0 rgba(0,0,0,.12), 0 13px 5px -1px rgba(0,0,0,.2);`
            : "none"
        }
        height={"100%"}
        pt={3}
        spacing={2}
        w={"280px"}
      >
        <HStack
          alignItems={"center"}
          backgroundColor={nav === "notes" && openMenu ? "#feefc3" : "transparent"}
          borderRightRadius={"40px"}
          pl={3}
          py={1}
          w={openMenu ? "280px" : "60px"}
          onClick={() => handleColorChange("notes")}
        >
          <ButtonSVG image={NotesSvg} name={"notes"} />
          <Text
            color={nav === "notes" ? "#202124" : "#5f6368"}
            display={openMenu ? "block" : "none"}
            fontWeight={"500"}
          >
            Notas
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          backgroundColor={nav === "reminder" && openMenu ? "#feefc3" : "transparent"}
          borderRightRadius={"40px"}
          pl={3}
          py={1}
          w={openMenu ? "280px" : "60px"}
          onClick={() => handleColorChange("reminder")}
        >
          <ButtonSVG image={ReminderSvg} name={"reminder"} />
          <Text
            color={nav === "reminder" ? "#202124" : "#5f6368"}
            display={openMenu ? "block" : "none"}
            fontWeight={"500"}
          >
            Recordatorios
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          backgroundColor={nav === "tag" && openMenu ? "#feefc3" : "transparent"}
          borderRightRadius={"40px"}
          pl={3}
          py={1}
          w={openMenu ? "280px" : "60px"}
          onClick={() => handleColorChange("tag")}
        >
          <ButtonSVG image={TagSvg} name={"tag"} />
          <Text
            color={nav === "tag" ? "#202124" : "#5f6368"}
            display={openMenu ? "block" : "none"}
            fontWeight={"500"}
          >
            Importantes
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          backgroundColor={nav === "edit" && openMenu ? "#feefc3" : "transparent"}
          borderRightRadius={"40px"}
          pl={3}
          py={1}
          w={openMenu ? "280px" : "60px"}
          onClick={() => handleColorChange("edit")}
        >
          <ButtonSVG image={EditSvg} name={"edit"} />
          <Text
            color={nav === "edit" ? "#202124" : "#5f6368"}
            display={openMenu ? "block" : "none"}
            fontWeight={"500"}
          >
            Editar etiquetas
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          backgroundColor={nav === "archiv && openMenue" ? "#feefc3" : "transparent"}
          borderRightRadius={"40px"}
          pl={3}
          py={1}
          w={openMenu ? "280px" : "60px"}
          onClick={() => handleColorChange("archive")}
        >
          <ButtonSVG image={ArchiveSvg} name={"archive"} />
          <Text
            color={nav === "archive" ? "#202124" : "#5f6368"}
            display={openMenu ? "block" : "none"}
            fontWeight={"500"}
          >
            Archivar
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          backgroundColor={nav === "trash" && openMenu ? "#feefc3" : "transparent"}
          borderRightRadius={"40px"}
          pl={3}
          py={1}
          w={openMenu ? "280px" : "60px"}
          onClick={() => handleColorChange("trash")}
        >
          <ButtonSVG image={TrashSvg} name={"trash"} />
          <Text
            color={nav === "trash" ? "#202124" : "#5f6368"}
            display={openMenu ? "block" : "none"}
            fontWeight={"500"}
          >
            Papelera
          </Text>
        </HStack>
      </Stack>
    </>
  );
};

export default SideBarIcons;
