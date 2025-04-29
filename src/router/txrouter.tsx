import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import Services from "../Services";

export const Txrouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
