import React from "react";
import {HStack, Stack} from "@chakra-ui/react";

import {CreateNote, Notes} from "@/components";
export interface NotesPageProps {}

const NotesPage: React.FC<NotesPageProps> = () => {
  return (
    <Stack alignItems="center" pt={3} width={"100%"}>
      <CreateNote />
      <HStack>
        <Notes />
      </HStack>
    </Stack>
  );
};

export default NotesPage;
