import {HStack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import {ArchivePage, EditPage, Layout, NotesPage, TagPage, TrashPage} from "./pages";
import {RootState} from "./redux";
import {useFetchTags} from "./hooks";
import {Tag} from "./utilities";

import {Navbar, SideBar} from "@/components";

function App() {
  const nav = useSelector((state: RootState) => state.navbar.value);
  const {tags} = useFetchTags();

  return (
    <div className="App">
      <Navbar />
      <HStack alignItems={"start"}>
        <SideBar />
        <Layout>
          {nav === "notes" && <NotesPage />}
          {nav === "archive" && <ArchivePage />}
          {nav === "trash" && <TrashPage />}
          {nav === "edit" && <EditPage />}
          {tags.map((tag: Tag) => {
            return nav === tag.tagName && <TagPage key={tag._id} tagName={tag.tagName} />;
          })}
        </Layout>
      </HStack>
    </div>
  );
}

export default App;
