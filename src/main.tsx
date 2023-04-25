import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {extendTheme} from "@chakra-ui/react";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App";

import {store} from "@/redux";

const theme = extendTheme({
  brand: {
    900: "#feefc3",
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
