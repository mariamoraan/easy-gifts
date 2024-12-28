import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./core/router/router.tsx";
import "./core/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
