import {Stack, Image, Text} from "@chakra-ui/react";

export interface EmptyPageProps {
  image: string;
  text: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({image, text}) => {
  return (
    <Stack alignItems={"center"}>
      {/* #E5E5E5 */}
      <Image height={"120px"} src={image} width={"120px"} />
      <Text color={"#5f6368"} fontSize={"1.375rem"} fontWeight={400} textAlign={"center"}>
        {text}
      </Text>
    </Stack>
  );
};

export default EmptyPage;
