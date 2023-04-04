import React from "react";
import {Stack} from "@chakra-ui/react";

import {EmptyPage} from "@/components/EmptyPage";
import Arhive from "@/assets/archive-empty.svg";

export interface ArchivePageProps {}

const ArchivePage: React.FC<ArchivePageProps> = () => {
  return (
    <Stack pt={"200px"}>
      <EmptyPage image={Arhive} text="Tus notas archivadas aparecerán aquí" />
    </Stack>
  );
};

export default ArchivePage;
