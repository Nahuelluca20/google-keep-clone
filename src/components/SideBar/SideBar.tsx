import {HStack, Stack, Text} from "@chakra-ui/react";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

import {ButtonNavSVG} from "@/components";
import {EditModal} from "@/components";
import NotesSvg from "@/assets/notes.svg";
import ReminderSvg from "@/assets/reminder.svg";
import EditSvg from "@/assets/edit.svg";
import TagSvg from "@/assets/tag.svg";
import TrashSvg from "@/assets/trash.svg";
import ArchiveSvg from "@/assets/archive-note.svg";
import {change, changeOpenMenuHover} from "@/redux/states/navbarState";
import {RootState} from "@/redux";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [isOpenState, setIsOpenState] = useState(false);
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
    {
      textContent: "Editar",
      image: EditSvg,
      onclick: () => setIsOpenState(true),
    },
    {textContent: "Archivados", name: "archive", image: ArchiveSvg},
    {textContent: "Papelera", name: "trash", image: TrashSvg},
  ];

  return (
    <>
      <HStack
        bgColor={openMenu ? "white" : "transparent"}
        h={"100vh"}
        position={"fixed"}
        top={["50px", "70px"]}
        zIndex={4}
        onMouseEnter={() => dispatch(changeOpenMenuHover(true))}
        onMouseLeave={() => dispatch(changeOpenMenuHover(false))}
      >
        <EditModal isOpen={isOpenState} onClose={() => setIsOpenState(false)} />
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
          transition="all 0.3s"
          w={openMenu ? "280px" : "60px"}
        >
          {menuOptions.map((option) => (
            <HStack
              key={option.textContent}
              alignItems={"center"}
              backgroundColor={nav === option.name && openMenu ? "#feefc3" : "transparent"}
              borderRightRadius={"40px"}
              cursor={"pointer"}
              pl={3}
              py={1}
              sx={{
                "&:hover": {
                  bg: nav === option.name && openMenu ? "#feefc3" : "#F1F3F4",
                },
              }}
              transition="all 0.5s"
              w={openMenu ? "280px" : "60px"}
              onClick={() => {
                if (option.name) {
                  handleColorChange(option.name);
                }
                option.onclick && option?.onclick();
              }}
            >
              <Stack>
                <ButtonNavSVG height="43px" image={option.image} name={option.name} width="43px" />
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
