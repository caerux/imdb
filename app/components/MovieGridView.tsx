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
    const isRowExpanded =
      expandedMovieIndex !== null &&
      expandedMovieIndex >= i &&
      expandedMovieIndex < i + columns;

    if (isRowExpanded) {
      const expandedMovie = movies[expandedMovieIndex];
      rows.push(
        <div
          key={`expanded-${expandedMovieIndex}`}
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 my-4"
        >
          <div className="col-span-full mx-2">
            <MovieListViewCard
              movie={expandedMovie}
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
              className={`cursor-pointer bg-white dark:bg-darkBlue text-black/70 dark:text-white/70 rounded-lg p-2 m-1 sm:m-2 sm:mb-3 sm:p-3 justify-between flex flex-col ${
                !isSmallScreen && movieIndex === expandedMovieIndex
                  ? "border border-blue-500 dark:border-lightBlue"
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
