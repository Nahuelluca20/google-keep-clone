import {HStack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import {ArchivePage, Layout, NotesPage, TrashPage} from "./pages";
import {RootState} from "./redux";

import {Navbar, SideBar} from "@/components";

function App() {
  const nav = useSelector((state: RootState) => state.navbar.value);

  return (
    <div className="App">
      <Navbar />
      <HStack>
        <SideBar />
        <Layout>
          {nav === "notes" && <NotesPage />}
          {nav === "archive" && <ArchivePage />}
          {nav === "trash" && <TrashPage />}
        </Layout>
      </HStack>
    </div>
  );
}

export default App;
