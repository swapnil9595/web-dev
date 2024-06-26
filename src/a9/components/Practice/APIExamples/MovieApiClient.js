import React, { useEffect, useState } from "react";

const MovieApiClient = () => {
  const [movies, setMovies] = useState([]);
  useEffect(
    () =>
      fetch("https://node-on-heroku-3.herokuapp.com/api/movies")
        .then((response) => response.json())
        .then((movies) => setMovies(movies)),
    []
  );

  const [movie, setMovie] = useState({
    _id: new Date().getTime() + "",
    rating: 2.5,
  });
  const onMovieTitleChange = (event) =>
    setMovie({ ...movie, title: event.target.value });
  const createMovieClickHandler = () =>
    fetch("https://node-on-heroku-3.herokuapp.com/api/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));

  const deleteMovie = (movie) =>
    fetch(`https://node-on-heroku-3.herokuapp.com/api/movies/${movie._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  const saveMovie = () =>
    fetch(`https://node-on-heroku-3.herokuapp.com/api/movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));

  return (
    <div>
      <h2>Movies</h2>
      <ul className="list-group">
        {movies.map((movie) => (
          <li className="list-group-item" key={movie._id}>
            {movie.title} {movie.rating}
            <button
              onClick={() => setMovie(movie)}
              className="btn btn-primary float-end ms-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteMovie(movie)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            <button
              onClick={createMovieClickHandler}
              className="btn btn-success float-end"
            >
              Create
            </button>
            <input
              className="form-control"
              value={movie.title}
              onChange={onMovieTitleChange}
              style={{ width: "70%" }}
            />
            <button
              onClick={saveMovie}
              className="btn btn-primary ms-2 float-end"
            >
              Save
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieApiClient;
