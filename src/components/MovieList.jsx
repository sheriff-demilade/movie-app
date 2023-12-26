import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie, idx) => (
        <MovieCard key={`movie_${idx}`} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
