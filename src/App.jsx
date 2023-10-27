import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListProvider } from "./context/ListContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Suspense } from "react";
import LoaderFullscreen from "./components/LoaderFullscreen";
import Page404 from "./pages/Page404";
import Layout from "./components/Layout";
import MoviesByGenre from "./pages/MoviesByGenre";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./pages/Details";

export default function App() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen gap-8 bg-background">
    //   <h1 className="text-3xl font-semibold text-white">Begin your journey!</h1>
    //   <Login />
    // </div>
    <ListProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoaderFullscreen />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/movies/:movieName" element={<Details />} />
              <Route path="/movies/genre/:genre" element={<MoviesByGenre />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ListProvider>
  );
}
