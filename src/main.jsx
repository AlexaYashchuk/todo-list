import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppMain } from "./AppMain";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppMain />
    </StrictMode>
  </BrowserRouter>
);
