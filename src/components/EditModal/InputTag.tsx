import {HStack, Input} from "@chakra-ui/react";
import {useState} from "react";

import {ButtonHover, ButtonSvg} from "../Buttons";

import closeTag from "@/assets/closeTag.svg";
import addTag from "@/assets/addTag.svg";
interface Props {}

const InputTag: React.FC<Props> = ({}) => {
  const [hovering, setHovering] = useState({
    cancel: false,
    add: false,
  });

  return (
    <HStack alignItems={"center"} height={"45px"} justifyContent={"center"} width={"100%"}>
      <ButtonHover
        bgColor="rgba(95,99,104,0.157)"
        padding="1px"
        tooltipText="Cancelar"
        onMouseEnter={() => setHovering({...hovering, cancel: true})}
        onMouseLeave={() => setHovering({...hovering, cancel: false})}
      >
        <ButtonSvg height={"25px"} hovered={hovering.cancel} image={closeTag} width={"25px"} />
      </ButtonHover>
      <Input
        _focus={{borderBottom: "1px solid rgba(0,0,0,.2)"}}
        _placeholder={{fontSize: "14px", fontWeight: "600", color: "#55595B"}}
        borderBottom={"1px solid transparent"}
        borderRadius={"0"}
        placeholder="Crear una nota..."
        py={"3px"}
        variant={"unstyled"}
      />
      <ButtonHover
        bgColor="rgba(95,99,104,0.157)"
        padding="1px"
        tooltipText="Crear etiqueta"
        onMouseEnter={() => setHovering({...hovering, add: true})}
        onMouseLeave={() => setHovering({...hovering, add: false})}
      >
        <ButtonSvg height={"25px"} hovered={hovering.add} image={addTag} width={"25px"} />
      </ButtonHover>
    </HStack>
  );
};

export default InputTag;
