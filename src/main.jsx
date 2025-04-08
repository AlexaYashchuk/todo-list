import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { storeRTK } from "./RTK/storeRTK";
import { AppRouter } from "./Routes";

createRoot(document.getElementById("root")).render(
  <Provider store={storeRTK}>
    <BrowserRouter>
      <StrictMode>
        <AppRouter />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
