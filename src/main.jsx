import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { AppMain } from "./AppMain";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppRouter } from "./Routes";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AppRouter />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
