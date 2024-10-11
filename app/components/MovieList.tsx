import { Key } from "react";
import MovieGridViewCard from "./MovieGridViewCard";
import MovieListViewCard from "./MovieListViewCard";

const MovieList = ({ movies, isGridView }) => {
  return (
    <>
      {isGridView ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg-grid-cols-3 xl:grid-cols-5">
          {movies.map((movie: any, index: Key) => (
            <MovieGridViewCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {movies.map((movie: any, index: Key) => (
            <MovieListViewCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
