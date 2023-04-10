import {Stack, Tooltip} from "@chakra-ui/react";

export interface ButtonHoverProps {
  children: React.ReactNode;
  padding: string;
  bgColor?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  tooltipText?: string;
}

const ButtonHover: React.FC<ButtonHoverProps> = ({
  children,
  padding,
  bgColor,
  onMouseLeave,
  onMouseEnter,
  tooltipText,
}) => {
  return (
    <Tooltip
      backgroundColor={"rgba(10,10,10,.7)"}
      fontSize={"12px"}
      label={tooltipText}
      mt={"-5px"}
      px={2}
      py={1}
    >
      <Stack
        _hover={{background: `${bgColor}`}}
        borderRadius={"full"}
        cursor={"pointer"}
        p={padding}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Stack>
    </Tooltip>
  );
};

export default ButtonHover;
