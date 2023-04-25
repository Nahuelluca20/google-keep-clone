import {match} from "assert";

import {Flex, Spinner, Stack} from "@chakra-ui/react";

import {CreateNote, Notes} from "@/components";
import {Note} from "@/utilities";
import {useFetchNotes} from "@/hooks";

export interface TagPageProps {
  tagName: string;
}

const TagPage: React.FC<TagPageProps> = ({tagName}) => {
  const {notes, loading} = useFetchNotes();

  return (
    <Stack alignItems="center" pt={3} width={"100%"}>
      <CreateNote />
      {loading ? (
        <Stack>
          <Spinner
            color="gray.500"
            emptyColor="gray.50"
            mt={[40, 40, 60]}
            size="xl"
            speed="0.65s"
            thickness="4px"
          />
        </Stack>
      ) : (
        <Flex display={"flex"} flexWrap="wrap" py={"16px"} width={"100%"}>
          {notes
            ?.filter((note: Note) => note.tags.includes(tagName))
            .map((note: Note) => (
              <Notes
                key={note._id}
                content={note.content}
                id={note._id}
                tags={note.tags}
                title={note.title}
              />
            ))}
        </Flex>
      )}
    </Stack>
  );
};

export default TagPage;
