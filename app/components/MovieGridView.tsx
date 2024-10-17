import React from "react";
import MovieGridViewCard from "./MovieGridViewCard";
import MovieListViewCard from "./MovieListViewCard";

const MovieGridView = ({
  movies,
  columns,
  expandedMovieIndex,
  isAnimating,
  isClosing,
  isSmallScreen,
  handleCardClick,
}) => {
  const rows = [];
  for (let i = 0; i < movies.length; i += columns) {
    const rowMovies = movies.slice(i, i + columns);

    const currentRowIndex = Math.floor(i / columns);
    const expandedRowIndex =
      expandedMovieIndex !== null
        ? Math.floor(expandedMovieIndex / columns)
        : -1;

    if (
      !isSmallScreen &&
      expandedMovieIndex !== null &&
      expandedRowIndex === currentRowIndex
    ) {
      rows.push(
        <div
          key={`expanded-${expandedMovieIndex}`}
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 my-4"
        >
          <div className="col-span-full mx-2">
            <MovieListViewCard
              movie={movies[expandedMovieIndex]}
              isAnimating={isAnimating}
              isClosing={isClosing}
            />
          </div>
        </div>
      );
    }

    rows.push(
      <div
        key={`row-${currentRowIndex}`}
        className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-1"
      >
        {rowMovies.map((movie: any, index: number) => {
          const movieIndex = i + index;
          return (
            <div
              key={movieIndex}
              onClick={() => handleCardClick(movieIndex)}
              className={`cursor-pointer bg-white dark:bg-darkBlue text-black/70 dark:text-white/70 rounded-lg shadow-lg p-2 m-1 md:m-2 md:p-3 justify-between flex flex-col ${
                !isSmallScreen && movieIndex === expandedMovieIndex
                  ? "border border-gray-300 dark:border-lightBlue"
                  : ""
              }`}
            >
              <MovieGridViewCard movie={movie} />
            </div>
          );
        })}
      </div>
    );
  }

  return <>{rows}</>;
};

export default MovieGridView;
