import {Box} from "@chakra-ui/react";
import {ReactSVG} from "react-svg";
import {useSelector, useDispatch} from "react-redux";

import {RootState} from "@/redux";
import {change} from "@/redux/slices/navbarSlice";

export interface ButtonNavSVGProps {
  image: string;
  name?: string;
  height: string;
  width: string;
}

const ButtonNavSVG: React.FC<ButtonNavSVGProps> = ({image, height, width, name}) => {
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
        height={height}
        justifyContent="center"
        p={1}
        transition="all 0.4s"
        width={width}
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

export default ButtonNavSVG;
