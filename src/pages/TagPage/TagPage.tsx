import {Flex, Spinner, Stack} from "@chakra-ui/react";

import {CreateNote, Notes} from "@/components";
import {Note} from "@/utilities";
import {useFetchNotes} from "@/hooks";

export interface TagPageProps {
  tagName: string;
  tagId: number;
}

const TagPage: React.FC<TagPageProps> = ({tagName, tagId}) => {
  const {notes, loading} = useFetchNotes();

  console.log(notes);

  return (
    <Stack alignItems="center" pt={3} width={"100%"}>
      <CreateNote tagId={tagId} />
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
            ?.filter((note: Note) => note.tags.map((tag) => tag.tagName).includes(tagName))
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
