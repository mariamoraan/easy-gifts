import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./core/router/router.tsx";
import "./core/styles/global.css";
import { AuthProvider } from "./features/auth/delivery/context/auth.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);
