import {Stack} from "@chakra-ui/react";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Stack pl={"70px"} pr={[2, 0]} pt={2} width={"100%"}>
      {children}
    </Stack>
  );
};

export default Layout;
