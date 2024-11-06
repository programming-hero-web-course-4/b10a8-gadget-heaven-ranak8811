import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import New1 from "./routes/New1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <New1>
      <RouterProvider router={routes}></RouterProvider>
    </New1>
  </StrictMode>
);
