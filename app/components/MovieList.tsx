import MovieGridViewCard from "./MovieGridViewCard";
import MovieListViewCard from "./MovieListViewCard";

const MovieList = ({ movies, isGridView }) => {
  return (
    <>
      {isGridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {movies.map((movie, index) => (
            <MovieGridViewCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {movies.map((movie, index) => (
            <MovieListViewCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
