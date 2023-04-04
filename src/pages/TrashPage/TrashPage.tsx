import {Stack} from "@chakra-ui/react";

import {EmptyPage} from "@/components/EmptyPage";
import Trash from "@/assets/trash-empty.svg";

export interface TrashPageProps {}

const TrashPage: React.FC<TrashPageProps> = () => {
  return (
    <Stack pt={"200px"}>
      <EmptyPage image={Trash} text="No hay notas en la papelera" />
    </Stack>
  );
};

export default TrashPage;
