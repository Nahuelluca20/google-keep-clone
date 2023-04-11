import {HStack, Input} from "@chakra-ui/react";
import {useState} from "react";

import {ButtonHover, ButtonSVG} from "../Buttons";

import tagIcon from "@/assets/tagIcon.svg";
import editTag from "@/assets/editTag.svg";
import deleteTag from "@/assets/deleteTag.svg";

interface Props {
  tag: string;
}

const TagElement: React.FC<Props> = ({tag}) => {
  const [hovering, setHovering] = useState({
    trash: false,
    input: false,
    edit: false,
  });

  const [tagValue, setTagValue] = useState(tag);

  return (
    <HStack
      alignItems={"center"}
      height={"45px"}
      justifyContent={"center"}
      width={"100%"}
      onMouseEnter={() => setHovering({...hovering, input: true})}
      onMouseLeave={() => setHovering({...hovering, input: false})}
    >
      {hovering.input ? (
        <ButtonHover
          bgColor="rgba(95,99,104,0.157)"
          padding="1px"
          tooltipText="Eliminar etiqueta"
          onMouseEnter={() => setHovering({...hovering, trash: true})}
          onMouseLeave={() => setHovering({...hovering, trash: false})}
        >
          <ButtonSVG height={"25px"} hovered={hovering.trash} image={deleteTag} width={"25px"} />
        </ButtonHover>
      ) : (
        <ButtonHover bgColor="rgba(95,99,104,0.157)" padding="1px" tooltipText="">
          <ButtonSVG height={"25px"} hovered={hovering.trash} image={tagIcon} width={"25px"} />
        </ButtonHover>
      )}

      <Input
        _focus={{borderBottom: "1px solid rgba(0,0,0,.2)"}}
        _placeholder={{fontSize: "14px", fontWeight: "600", color: "#3C4043"}}
        borderBottom={"1px solid transparent"}
        borderRadius={"0"}
        color={"#3C4043"}
        fontSize={"14px"}
        fontWeight={"500"}
        placeholder="Crear una nota..."
        py={"3px"}
        value={tagValue}
        variant={"unstyled"}
        onChange={(e) => setTagValue(e.target.value)}
      />

      <ButtonHover
        bgColor="rgba(95,99,104,0.157)"
        padding="1px"
        tooltipText="Renombrar etiqueta"
        onMouseEnter={() => setHovering({...hovering, edit: true})}
        onMouseLeave={() => setHovering({...hovering, edit: false})}
      >
        <ButtonSVG height={"25px"} hovered={hovering.edit} image={editTag} width={"25px"} />
      </ButtonHover>
    </HStack>
  );
};

export default TagElement;
