import {SearchIcon} from "@chakra-ui/icons";
import {Stack, HStack, Input, Text, Checkbox} from "@chakra-ui/react";
import React, {useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {Tag} from "@/utilities";
import {addTagsToNoteById, deleteTagFromNoteById} from "@/redux/slices/notesSlice";
import {AppDispatch} from "@/redux";

interface Props {
  tagsProps: Tag[];
  noteId: number;
}

const MenuTagsCheckBoxes: React.FC<Props> = ({tagsProps, noteId}) => {
  const tags = useSelector((state: any) => state.tag.tags, shallowEqual);
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  console.log(tagsProps);
  const handleCheckboxChange = (tag: Tag, isChecked: boolean) => {
    const iDs = {id: noteId, tagId: tag._id};
    const iDsAndName = {id: noteId, tagId: tag._id, tagName: tag.tagName};

    if (isChecked) {
      dispatch(addTagsToNoteById(iDsAndName));
    } else {
      dispatch(deleteTagFromNoteById(iDs));
    }
  };

  return (
    <>
      <Stack>
        <Text color={"#202124"} fontSize={"15px"} fontWeight={500} px={"12px"}>
          Etiquetar nota
        </Text>
        <HStack alignItems={"center"} px={"8px"} py={"2px"}>
          <Input
            _placeholder={{fontSize: "13px"}}
            fontSize={"13px"}
            p={"6px"}
            placeholder="Ingresar el nombre de la etiqueta"
            value={inputValue}
            variant={"unstyled"}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Stack cursor={"pointer"} ml={"-12px"} pt={1}>
            <SearchIcon color="brand.700" h={3} w={3} />
          </Stack>
        </HStack>
        <Stack px={"12px"}>
          {tags
            .filter((tag: Tag) => tag.tagName.includes(inputValue))
            .map((tag: Tag) => (
              <Checkbox
                key={tag._id}
                isChecked={tagsProps.some((t) => t.tagName === tag.tagName)}
                size="sm"
                onChange={(e) => handleCheckboxChange(tag, e.target.checked)}
              >
                {tag.tagName}
              </Checkbox>
            ))}
        </Stack>
      </Stack>
    </>
  );
};

export default MenuTagsCheckBoxes;
