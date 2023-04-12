import {useEffect, useState} from "react";
import {Flex, Spinner, Stack} from "@chakra-ui/react";

import {getNotes} from "@/services";
import {CreateNote, Notes} from "@/components";
import {Note} from "@/utilities";
export interface NotesPageProps {}

const NotesPage: React.FC<NotesPageProps> = () => {
  const [notes, setNotes] = useState<Note[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getNotesApi() {
    const notesApi = await getNotes();

    await setNotes(notesApi);
    await setLoading(false);
  }

  useEffect(() => {
    getNotesApi();
  }, []);

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
        <Flex display={"flex"} flexWrap="wrap" py={"16px"}>
          {notes?.map((note) => (
            <Notes key={note._id} content={note.content} tags={note.tags} title={note.title} />
          ))}
        </Flex>
      )}
    </Stack>
  );
};

export default NotesPage;
