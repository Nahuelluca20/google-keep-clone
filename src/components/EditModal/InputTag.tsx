import {FormControl, HStack, Input} from "@chakra-ui/react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {AnyAction, AsyncThunkAction} from "@reduxjs/toolkit";

import {ButtonHover, ButtonSVG} from "../Buttons";

import closeTag from "@/assets/closeTag.svg";
import addTag from "@/assets/addTag.svg";
import {getTags} from "@/services";
import {Tag} from "@/utilities";
import {createTag} from "@/redux/slices/tagSlice";
import {AppDispatch} from "@/redux";

const schema = yup
  .object({
    tagTitle: yup.string().required(),
  })
  .required();

interface Props {}

const InputTag: React.FC<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [hovering, setHovering] = useState({
    cancel: false,
    add: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    dispatch(createTag(data.tagTitle));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack alignItems={"center"} height={"45px"} justifyContent={"center"} width={"100%"}>
        <ButtonHover
          bgColor="rgba(95,99,104,0.157)"
          padding="1px"
          tooltipText="Cancelar"
          onMouseEnter={() => setHovering({...hovering, cancel: true})}
          onMouseLeave={() => setHovering({...hovering, cancel: false})}
        >
          <ButtonSVG height={"25px"} hovered={hovering.cancel} image={closeTag} width={"25px"} />
        </ButtonHover>
        <FormControl isInvalid={errors.tagTitle as any}>
          <Input
            _focus={{borderBottom: "1px solid rgba(0,0,0,.2)"}}
            _placeholder={{fontSize: "14px", fontWeight: "600", color: "#55595B"}}
            borderBottom={"1px solid transparent"}
            borderRadius={"0"}
            id="tagTitle"
            placeholder="Crear una etiqueta nueva"
            py={"3px"}
            variant={"unstyled"}
            {...register("tagTitle", {
              required: "This is required",
              minLength: {value: 2, message: "Minimum length should be 2"},
            })}
          />
        </FormControl>
        <button type="submit">
          <ButtonHover
            bgColor="rgba(95,99,104,0.157)"
            padding="1px"
            tooltipText="Crear etiqueta"
            onMouseEnter={() => setHovering({...hovering, add: true})}
            onMouseLeave={() => setHovering({...hovering, add: false})}
          >
            <ButtonSVG height={"25px"} hovered={hovering.add} image={addTag} width={"25px"} />
          </ButtonHover>
        </button>
      </HStack>
    </form>
  );
};

export default InputTag;
