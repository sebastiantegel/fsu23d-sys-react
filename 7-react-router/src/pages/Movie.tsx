import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieExt } from "../models/IMovieExt";
import axios from "axios";

export const Movie = () => {
  const [movie, setMovie] = useState<IMovieExt>();

  const { imdbId } = useParams();

  if (!movie) {
    axios
      .get<IMovieExt>("https://omdbapi.com/?apikey=416ed51a&i=" + imdbId)
      .then((response) => {
        setMovie(response.data);
      });
  }

  return (
    <>
      <h3>{movie?.Title}</h3>
      <img src={movie?.Poster} alt={movie?.Title} />
      <p>{movie?.Plot}</p>
      <p>{movie?.Actors}</p>
      <p>{movie?.Director}</p>
    </>
  );
};
