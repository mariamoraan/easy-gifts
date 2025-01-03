import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./core/router/router.tsx";
import "./core/styles/global.css";
import { AuthProvider } from "./features/auth/delivery/context/auth.context.tsx";
import "./core/i18n/i18n.ts";
import { ReactQueryProvider } from "./core/react-query/react-query-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ReactQueryProvider>
  </StrictMode>
);
