import { useState } from "react";
import { MovieSearchForm } from "../components/MovieSearchForm";
import { IMovie } from "../models/IMovie";
import { SearchResult } from "../components/SearchResult";
import { searchMovies } from "../services/movieService";

export const MovieSearchApp = () => {
  const [movies, setMovies] = useState<IMovie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );

  const search = async (searchText: string) => {
    const omdbMovies = await searchMovies(searchText);
    setMovies(omdbMovies);
    localStorage.setItem("movies", JSON.stringify(omdbMovies));
  };

  return (
    <>
      <MovieSearchForm search={search} />
      <SearchResult movies={movies} />
    </>
  );
};
