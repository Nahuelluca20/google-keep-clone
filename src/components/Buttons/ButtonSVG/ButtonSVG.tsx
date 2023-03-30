import {useState} from "react";
import {Box} from "@chakra-ui/react";
import {ReactSVG} from "react-svg";

export interface ButtonSVGProps {
  image: string;
  toggleDrawer?: () => void;
}

const ButtonSVG: React.FC<ButtonSVGProps> = ({image, toggleDrawer}) => {
  const [fillColor, setFillColor] = useState({
    svgColor: "#5f6368",
    bgColor: "transparent",
  });
  const handleColorChange = () => {
    toggleDrawer && toggleDrawer();
    if (fillColor.svgColor === "#5f6368") {
      setFillColor({svgColor: "#202124", bgColor: "#feefc3"});
    } else {
      setFillColor({svgColor: "#5f6368", bgColor: "transparent"});
    }
  };

  return (
    <>
      <Box
        alignItems={"center"}
        backgroundColor={fillColor.bgColor}
        borderRadius={"full"}
        color="white"
        display={"flex"}
        height={"43px"}
        justifyContent="center"
        p={1}
        width={"43px"}
        onClick={handleColorChange}
      >
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute("fill", fillColor.svgColor);
          }}
          src={image}
        />
      </Box>
    </>
  );
};

export default ButtonSVG;
