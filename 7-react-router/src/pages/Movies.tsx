import { useState } from "react";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { Link } from "react-router-dom";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  if (!movies) {
    axios
      .get<IOmdbResponse>("https://omdbapi.com/?apikey=416ed51a&s=star")
      .then((response) => {
        console.log(response.data.Search);
        setMovies(response.data.Search);
      });
  }

  return (
    <>
      {movies?.map((movie) => {
        return (
          <div>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <Link to={"/movie/" + movie.imdbID}>Läs mer...</Link>
          </div>
        );
      })}
    </>
  );
};
