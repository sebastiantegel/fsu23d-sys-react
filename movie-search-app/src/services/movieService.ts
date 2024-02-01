import { IOmdbResponse } from "./../models/IOmdbResponse";
import { IMovieExt } from "../models/IMovieExt";
import { get } from "./serviceBase";

const API_BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const searchMovies = async (searchText: string) => {
  const response = await get<IOmdbResponse>(API_BASE_URL + "s=" + searchText);
  return response.data.Search;
};

export const getMoviesById = async (id: string) => {
  const response = await get<IMovieExt>(API_BASE_URL + "i=" + id);
  return response.data;
};
