import React from "react";
import {Stack} from "@chakra-ui/react";

import {CreateNote} from "@/components";
export interface NotesPageProps {}

const NotesPage: React.FC<NotesPageProps> = () => {
  return (
    <Stack alignItems="center" pt={3} width={"100%"}>
      <CreateNote />
    </Stack>
  );
};

export default NotesPage;
