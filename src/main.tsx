import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { RouteMetaData } from "@shared/navigation";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

import { App } from "./App.jsx";

import "@styles/index.css";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RouteMetaData />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
