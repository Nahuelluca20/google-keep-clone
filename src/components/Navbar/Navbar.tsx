import {Box, Flex, IconButton, Image, Avatar, Text} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";

import {SearchBar} from "../SearchBar";

import keepLogo from "@/assets/keepLogo.png";
import {closeMenu} from "@/redux/slices/navbarSlice";
import {RootState} from "@/redux";
import {useFetchTags} from "@/hooks";
import {Tag} from "@/utilities";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const nav = useSelector((state: RootState) => state.navbar.value);
  const dispatch = useDispatch();
  const {tags} = useFetchTags();

  return (
    <Flex alignItems={"center"} bg="white" boxShadow="md" px="3" py={["1", "3"]}>
      <IconButton
        isRound
        aria-label="Menu"
        icon={<HamburgerIcon color="brand.700" h={[5, 6]} w={[5, 6]} />}
        variant="ghost"
        onClick={() => dispatch(closeMenu())}
      />

      {nav === "notes" ? (
        <>
          <Image alt="Logo" h={["35px", "40px"]} mx="2" src={keepLogo} w={["35px", "40px"]} />
          <Box fontSize="lg" fontWeight="bold">
            <Text color={"brand.700"} fontSize={"22px"} fontWeight={"400"}>
              Keep
            </Text>
          </Box>
        </>
      ) : (
        <Box fontSize="lg" fontWeight="bold" ml={2}>
          <Text
            color={"brand.700"}
            fontSize={"22px"}
            fontWeight={"400"}
            maxW={"200px"}
            minW={"200px"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {nav === "reminder" && "Recordatorios"}
            {nav === "tag" && "Importante"}
            {tags.map((tag: Tag) => {
              return nav === tag.tagName && tag.tagName;
            })}
            {nav === "edit" && "Editar"}
            {nav === "archive" && "Archivados"}
            {nav === "trash" && "Papelera"}
          </Text>
        </Box>
      )}

      <SearchBar />
      <Avatar
        h={["32px", "42px"]}
        mx="2"
        name="Nahuel"
        src="https://bit.ly/dan-abramov"
        w={["32px", "42px"]}
      />
    </Flex>
  );
};

export default Navbar;
