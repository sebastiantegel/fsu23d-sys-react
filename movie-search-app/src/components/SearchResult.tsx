// import { useNavigate } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { IMovieExt } from "../models/IMovieExt";
import { getMoviesById } from "../services/movieService";

interface ISearchResultProps {
  movies: IMovie[] | undefined;
}

export const SearchResult = ({ movies }: ISearchResultProps) => {
  const [show, setShow] = useState(true);
  const [movie, setMovie] = useState<IMovieExt>();

  // const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const getMovieDetails = async (id: string) => {
    // navigate("/movie/" + movie.imdbID);
    const movieExt = await getMoviesById(id);
    setMovie(movieExt);
    setShow(true);
  };

  return (
    <section id="movies">
      {movies?.map((movie) => (
        <div key={movie.imdbID} onClick={() => getMovieDetails(movie.imdbID)}>
          <h4>{movie.Title}</h4>
          <div className="img-container">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{movie?.Plot}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
