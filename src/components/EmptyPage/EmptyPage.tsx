import {Stack, Image, Text} from "@chakra-ui/react";

export interface EmptyPageProps {
  image: string;
  text: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({image, text}) => {
  return (
    <Stack>
      {/* #E5E5E5 */}
      <Image height={"120px"} src={image} width={"120px"} />
      <Text>{text}</Text>
    </Stack>
  );
};

export default EmptyPage;
