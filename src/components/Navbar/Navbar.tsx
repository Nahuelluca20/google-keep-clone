import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Image,
  Input,
  Avatar,
  Text,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import {HamburgerIcon, PhoneIcon, SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import keepLogo from "@/assets/keepLogo.png";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

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

      <Flex display={["none", "none", "flex"]} ml={10} mr={["0", "0", "200px", "400px"]} w={"100%"}>
        <IconButton
          isRound
          aria-label="Menu"
          icon={<SearchIcon color="brand.700" h={4} w={4} />}
          mr={"-40px"}
          variant="ghost"
          zIndex={2}
        />
        <Input
          alignItems="center"
          bg={"brand.800"}
          boxShadow={"0 1px 1px 0 rgba(65,69,73,.3), 0 1px 3px 1px rgba(65,69,73,.15)"}
          display={["none", "flex"]}
          pl={10}
          placeholder="Search"
          type="tel"
          w="100%"
        />
      </Flex>

      <Spacer display={["block", "block", "none"]} />
      <AnimatePresence>
        {showSearchBar && (
          <motion.div
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            initial={{opacity: 0, y: -10}}
            style={{position: "absolute", left: "10"}}
          >
            <Input
              bg={"white"}
              boxShadow={"0 1px 1px 0 rgba(65,69,73,.3), 0 1px 3px 1px rgba(65,69,73,.15)"}
              display={["block", "none"]}
              placeholder="Search"
              px={4}
              py={2}
              size="md"
              variant="unstyled"
              w="250px"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <IconButton
        isRound
        aria-label="Menu"
        display={["block", "block", "none"]}
        icon={<SearchIcon color="brand.700" h={4} w={4} />}
        variant="ghost"
        onClick={handleSearchClick}
      />

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
