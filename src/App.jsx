import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "../src/styles/GlobalStyles";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Around from "../src/pages/Around";
import Cabin from "../src/pages/Cabin";
import Cabins from "../src/pages/Cabins";
import Contact from "../src/pages/Contact";
import NotFound from "../src/pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ui/ScrollToTop";
// import Layout from "./ui/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="around" element={<Around />} />

            <Route path="cabins" element={<Cabins />} />
            <Route path="cabins/:cabinID" element={<Cabin />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
