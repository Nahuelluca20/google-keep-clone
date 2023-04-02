import {HStack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

import {Layout, NotesPage} from "./pages";
import {RootState} from "./redux";

import {Navbar, SideBar} from "@/components";

function App() {
  const nav = useSelector((state: RootState) => state.navbar.value);

  return (
    <div className="App">
      <Navbar />
      <HStack>
        <SideBar />
        <Layout>{nav === "notes" && <NotesPage />}</Layout>
      </HStack>
    </div>
  );
}

export default App;
