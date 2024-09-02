import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, About, Contact } from "./pages";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true, //Sets default child route that is shown with parent route
        element: <Home />,
      },
      {
        path: "./About",
        element: <About />,
      },
      {
        path: "./Contact",
        element: <Contact />,
      },
    ],
  },
]);
