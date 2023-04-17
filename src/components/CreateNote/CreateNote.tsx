import {Input, Image, Text, HStack, Stack, Box, Button} from "@chakra-ui/react";
import {useState} from "react";
import {ReactSVG} from "react-svg";

import PinSvg from "@/assets/pin.svg";
import PinedSvg from "@/assets/pined.svg";
import Reminder from "@/assets/reminder-note.svg";
import DotMenu from "@/assets/dotMenu.svg";
import Arhive from "@/assets/archive-note.svg";

export interface CreateNoteProps {}

const CreateNote: React.FC<CreateNoteProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleColorChange = () => {
    setChecked(!checked);
  };

  return (
    <Stack
      border={"1px solid transparent"}
      borderRadius={"8px"}
      boxShadow={"0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)"}
      cursor={"text"}
      maxWidth="600px"
      px={"16px"}
      py={"12px"}
      spacing={0}
      width={"100%"}
      onClick={isOpen === false ? handleToggle : undefined}
    >
      <HStack>
        {isOpen && (
          <>
            <Input
              _placeholder={{fontSize: "1rem"}}
              placeholder="Título"
              value={titleValue}
              variant={"unstyled"}
              onChange={(e) => setTitleValue(e.target.value)}
            />
            <Box
              alignItems={"center"}
              borderRadius={"full"}
              color="white"
              cursor={"pointer"}
              display={"flex"}
              height={"33px"}
              justifyContent="center"
              p={1}
              transition="all 0.4s"
              width={"33px"}
              onClick={handleColorChange}
            >
              <ReactSVG src={checked ? PinedSvg : PinSvg} />
            </Box>
          </>
        )}
      </HStack>

      {isOpen === false && (
        <Text color="rgba(0,0,0,0.702)" fontSize={"14px"} fontWeight={500}>
          Crear una nota...
        </Text>
      )}

      {isOpen && (
        <>
          <Input
            _placeholder={{fontSize: "14px"}}
            placeholder="Crear una nota..."
            py={"12px"}
            value={contentValue}
            variant={"unstyled"}
            onChange={(e) => setContentValue(e.target.value)}
          />
          <HStack justifyContent="space-between" pb={1}>
            <HStack spacing={[5, 10]}>
              <Image cursor={"pointer"} height={"20px"} src={Reminder} width={"20px"} />
              <Image cursor={"pointer"} height={"20px"} src={Arhive} width={"20px"} />
              <Image cursor={"pointer"} height={"18px"} src={DotMenu} width={"18px"} />
            </HStack>
            <Button
              color={"#202124"}
              fontSize="14px"
              fontWeight={500}
              variant={"unstyled"}
              onClick={handleToggle}
            >
              Cerrar
            </Button>
          </HStack>
        </>
      )}
    </Stack>
  );
};

export default CreateNote;
