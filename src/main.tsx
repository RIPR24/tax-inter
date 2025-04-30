import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Txrouter } from "./router/txrouter.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={Txrouter} />
  </>
);
