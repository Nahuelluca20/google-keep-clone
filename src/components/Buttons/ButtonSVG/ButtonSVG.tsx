import {Box} from "@chakra-ui/react";
import {ReactSVG} from "react-svg";

export interface ButtonSvgProps {
  hovered: boolean;
  image: string;
  height: string;
  width: string;
}

const ButtonSvg: React.FC<ButtonSvgProps> = ({width, height, image, hovered}) => {
  return (
    <Box
      alignItems={"center"}
      borderRadius={"full"}
      color="white"
      display={"flex"}
      height={height}
      justifyContent="center"
      p={1}
      transition="all 0.4s"
      width={width}
    >
      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute("fill", hovered ? "#202124" : "#5f6368");
        }}
        src={image}
      />
    </Box>
  );
};

export default ButtonSvg;
