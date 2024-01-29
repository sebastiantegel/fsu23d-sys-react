import { createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { Movie } from "./pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:imdbId",
        element: <Movie />,
      },
    ],
  },
]);
