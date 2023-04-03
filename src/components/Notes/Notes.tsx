import {Button, Image, HStack, Stack, Text, Flex, Box} from "@chakra-ui/react";

import {Tags} from "@/components";
import PinSvg from "@/assets/pin.svg";
import PinedSvg from "@/assets/pined.svg";
import Reminder from "@/assets/reminder-note.svg";
import DotMenu from "@/assets/dotMenu.svg";
import Arhive from "@/assets/archive-note.svg";

export interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
  const tagsNames = ["Meh", "importante", "no tan importante"];

  return (
    <Stack border={"1px solid #e0e0e0"} borderRadius={"8px"} margin={"16px"} p={4} width={"240px"}>
      <Text fontSize="16px" fontWeight={600}>
        Hola
      </Text>
      <Text fontSize={"14px"} w={"100%"}>
        sarasa sarasa sarasa sarasasarsarasasarsarasasar
      </Text>
      <Box display={"flex"} flexWrap="wrap">
        {tagsNames.map((tag) => (
          <Tags key={tag} text={tag} />
        ))}
      </Box>

      <HStack justifyContent="space-between" pb={1}>
        <HStack spacing={[5, 6]}>
          <Image cursor={"pointer"} height={"20px"} src={Reminder} width={"20px"} />
          <Image cursor={"pointer"} height={"20px"} src={Arhive} width={"20px"} />
          <Image cursor={"pointer"} height={"18px"} src={DotMenu} width={"18px"} />
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Notes;
