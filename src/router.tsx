import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, About, Contact, Dashboard } from "./pages";
import { Settings } from "./components/Settings";
import { Stats } from "./components/Stats";

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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
           {
             path: "settings",
             element: <Settings />
           },
           {
             path: "stats",
             element: <Stats />
           },
        ],
      },
    ],
  },
]);
