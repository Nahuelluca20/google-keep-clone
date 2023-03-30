import {Box, Flex, IconButton, Image, Avatar, Text} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

import {SearchBar} from "../SearchBar";

import keepLogo from "@/assets/keepLogo.png";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex alignItems={"center"} bg="white" boxShadow="md" px="4" py={["1", "3"]}>
      <IconButton
        isRound
        aria-label="Menu"
        icon={<HamburgerIcon color="brand.700" h={[5, 6]} w={[5, 6]} />}
        variant="ghost"
      />

      <Image alt="Logo" h={["35px", "40px"]} mx="2" src={keepLogo} w={["35px", "40px"]} />
      <Box fontSize="lg" fontWeight="bold">
        <Text color={"brand.700"} fontSize={"22px"} fontWeight={"400"}>
          Keep
        </Text>
      </Box>

      <SearchBar />
      {/* <Input mx="2" placeholder="Search" size="md" variant="filled" /> */}
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
