import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    // Förhindrar oändlig loop med tanken om movies är någonting,
    // avbryt resten av vår useEffect
    if (movies) return;

    // Skapa en ny async funktion som hjälper oss med syntax
    const getData = async () => {
      // Hämta data
      const omdbMovies = await getMovies();

      // Om shouldUpdate = true, uppdatera statet
      // Om shouldUpdate = false, uppdatera INTE statet (då det inte längre finns)
      if (shouldUpdate) setMovies(omdbMovies);
    };

    let shouldUpdate = true;

    // Sätt igång datahämtningen
    getData();

    return () => {
      // Om komponenten försvinner (tas bort ur DOM:en), kör denna kod
      shouldUpdate = false;
    };
  });

  return <>{movies?.length}</>;
};
