import { IMovieExt } from "./../models/IMovieExt";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const API_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async () => {
  const response = await get<IOmdbResponse>(`${API_URL}s=star`); // axios.get<IOmdbResponse>(`${API_URL}s=star`);

  return response.data.Search;
};

export const getMovieById = async (id: string) => {
  const response = await get<IMovieExt>(`${API_URL}i=${id}`);

  return response.data;
};
