import {HStack} from "@chakra-ui/react";

import SideBarIcons from "./SideBarIcons";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <HStack h={"100vh"}>
        <SideBarIcons />
      </HStack>
    </>
  );
};

export default SideBar;
