import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { MovieSearchApp } from "./pages/MovieSearchApp";
import { NotFound } from "./pages/NotFound";
import { MovieDetails } from "./pages/MovieDetails";

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
        path: "/movies",
        element: <MovieSearchApp />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);
