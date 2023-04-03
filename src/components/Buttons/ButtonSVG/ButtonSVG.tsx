import {Box} from "@chakra-ui/react";
import {ReactSVG} from "react-svg";
import {useSelector, useDispatch} from "react-redux";

import {RootState} from "@/redux";
import {change} from "@/redux/states/navbarState";

export interface ButtonSVGProps {
  image: string;
  name?: string;
}

const ButtonSVG: React.FC<ButtonSVGProps> = ({image, name}) => {
  const nav = useSelector((state: RootState) => state.navbar.value);
  const dispatch = useDispatch();

  const handleColorChange = () => {
    name && dispatch(change(name));
  };

  return (
    <>
      <Box
        alignItems={"center"}
        backgroundColor={nav === name ? "#feefc3" : "transparent"}
        borderRadius={"full"}
        color="white"
        display={"flex"}
        height={"43px"}
        justifyContent="center"
        p={1}
        transition="all 0.4s"
        width={"43px"}
        onClick={handleColorChange}
      >
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute("fill", nav === name ? "#202124" : "#5f6368");
          }}
          src={image}
        />
      </Box>
    </>
  );
};

export default ButtonSVG;
