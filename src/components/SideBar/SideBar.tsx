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

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const nav = useSelector((state: RootState) => state.navbar.value);
  const openMenu = useSelector((state: RootState) => state.navbar.openMenu);
  const dispatch = useDispatch();
  const handleColorChange = (value: string) => {
    dispatch(change(value));
  };

  const menuOptions = [
    {textContent: "Notas", name: "notes", image: NotesSvg},
    {textContent: "Recordatorios", name: "reminder", image: ReminderSvg},
    {textContent: "Importante", name: "tag", image: TagSvg},
    {textContent: "Editar", name: "edit", image: EditSvg},
    {textContent: "Archivados", name: "archive", image: ArchiveSvg},
    {textContent: "Papelera", name: "trash", image: TrashSvg},
  ];

  return (
    <>
      <HStack h={"100vh"}>
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
          transition="all 0.2s"
          w={openMenu ? "280px" : "60px"}
        >
          {menuOptions.map((option) => (
            <HStack
              key={option.name}
              alignItems={"center"}
              backgroundColor={nav === option.name && openMenu ? "#feefc3" : "transparent"}
              borderRightRadius={"40px"}
              pl={3}
              py={1}
              transition="all 0.4s"
              w={openMenu ? "280px" : "60px"}
              onClick={() => handleColorChange(option.name)}
            >
              <Stack>
                <ButtonSVG image={option.image} name={option.name} />
              </Stack>
              <Text
                color={nav === option.name ? "#202124" : "#5f6368"}
                display={openMenu ? "block" : "none"}
                fontWeight={"500"}
              >
                {option.textContent}
              </Text>
            </HStack>
          ))}
        </Stack>
      </HStack>
    </>
  );
};

export default SideBar;
