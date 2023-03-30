import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  brand: {
    900: "#1a365d",
    800: "#f1f3f4",
    700: "#5f6368",
  },
  components: {
    Drawer: {
      sizes: {
        sideBar: {
          dialog: {maxWidth: "280px"},
        },
      },
    },
  },
});

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
