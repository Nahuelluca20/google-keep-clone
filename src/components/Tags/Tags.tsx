import {Text, Box, IconButton} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useDispatch} from "react-redux";

import {AppDispatch} from "@/redux";
import {deleteTagFromNoteById} from "@/redux/slices/notesSlice";

export interface TagsProps {
  text: string;
  id: number;
  noteId: number;
}

const Tags: React.FC<TagsProps> = ({text, id, noteId}) => {
  const [hovering, setHovering] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const iDs = {id: noteId, tagId: id};

  const handleDelete = async () => {
    try {
      await dispatch(deleteTagFromNoteById(iDs));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box alignItems={"center"} display={"flex"} m={1} maxWidth={"100%"}>
      <Text
        isTruncated
        bgColor={"rgba(0,0,0,.08)"}
        border={"1px solid  rgba(0,0,0,.08)"}
        borderRadius={"12px"}
        color={"#3c4043"}
        cursor={"pointer"}
        fontSize={"11px"}
        fontWeight={600}
        px={"7px"}
        py={"3px"}
        width={"100%"}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {text}
      </Text>
      {hovering && (
        <IconButton
          aria-label="Cerrar"
          icon={<CloseIcon h={"8px"} w={"8px"} />}
          ml={"-25px"}
          right="0"
          size={"xs"}
          variant={"unstyled"}
          onClick={() => handleDelete()}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseOver={(e) => e.stopPropagation()}
        />
      )}
    </Box>
  );
};

export default Tags;
