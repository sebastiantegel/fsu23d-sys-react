import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieExt } from "../models/IMovieExt";

export const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovieExt>();

  const { id } = useParams();

  const getMovie = async () => {
    const response = await axios.get<IMovieExt>(
      "https://omdbapi.com/?apikey=416ed51a&i=" + id
    );

    setMovie(response.data);
  };

  if (!movie) {
    getMovie();
  }

  return <>{movie?.Plot}</>;
};
