import {Stack, Text} from "@chakra-ui/react";
import React from "react";
export interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
  return (
    <Stack pt={"100px"}>
      <Stack alignItems="center" width={"100%"}>
        <Stack boxShadow={"xl"} height={"395px"} width={"300px"}>
          <Text>HOla</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EditPage;
