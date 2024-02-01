import { IMovie } from "./IMovie";

export interface IMovieExt extends IMovie {
  Actors: string;
  Director: string;
  Plot: string;
}
