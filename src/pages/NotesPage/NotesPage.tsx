import React from "react";
import {Flex, Stack} from "@chakra-ui/react";

import {CreateNote, Notes} from "@/components";
export interface NotesPageProps {}

const NotesPage: React.FC<NotesPageProps> = () => {
  return (
    <Stack alignItems="center" pt={3} width={"100%"}>
      <CreateNote />
      <Flex display={"flex"} flexWrap="wrap" py={"16px"}>
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </Flex>
    </Stack>
  );
};

export default NotesPage;
