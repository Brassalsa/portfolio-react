import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/index.tsx";
import "./index.css";
import Header from "./components/Header.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Header />
      <App />
    </ThemeProvider>
  </StrictMode>
);
