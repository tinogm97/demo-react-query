import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { ComponentOne, ComponentTwo } from "./components/component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
/*  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 5000,
      staleTime: Infinity,
    },
  }, */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10000,
    },
  },
});
root.render(
  <React.StrictMode>
    {/*    <QueryClientProvider client={queryClient}>
      <ComponentOne />
      <ComponentTwo />
      <ReactQueryDevtools />
    </QueryClientProvider> */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ComponentOne />
      <ComponentTwo />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

/* 
 /* <QueryClientProvider client={queryClient}>
      <ComponentOne />
      <ComponentTwo />
    </QueryClientProvider> */
