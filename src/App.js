import { useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import { moviePlaceholder } from "./components/moviePlaceholder";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState(moviePlaceholder);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  // This function add a new movie from AddMovie component input form
  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // This function get title and rating from Filter component input form then filter the movies state array into filteredMovies
  const filterMoviesHandler = (title, rating) => {
    const filterTitle = title.toLowerCase();
    const filterRating = rating.toLowerCase();
    const result = movies.filter(
      ({ title, rating }) =>
        title.toLowerCase().includes(filterTitle) &&
        rating.toLowerCase().includes(filterRating)
    );
    setFilteredMovies(result);
  };
  return (
    <div className="m-5 mt-2">
      <h1 className="mb-5 text-center">Movie App</h1>
      <div className="d-flex justify-content-around mb-5">
        <AddMovie addNewMovie={addNewMovie} />
        <Filter filterMovies={filterMoviesHandler} />
      </div>
      <h2 className="mb-3 text-center">Movie List</h2>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
