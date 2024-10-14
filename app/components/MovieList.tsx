import { useState, useEffect } from "react";
import React from "react";
import MovieGridViewCard from "./MovieGridViewCard";
import MovieListViewCard from "./MovieListViewCard";

const getNumberOfColumns = () => {
  const width = window.innerWidth;
  if (width >= 1280) {
    return 5;
  } else if (width >= 640) {
    return 3;
  } else {
    return 2;
  }
};

const MovieList = ({ movies, isGridView }) => {
  const [expandedMovieIndex, setExpandedMovieIndex] = useState(null);
  const [columns, setColumns] = useState(getNumberOfColumns());

  useEffect(() => {
    const handleResize = () => {
      setColumns(getNumberOfColumns());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = columns === 2;

  const handleCardClick = (index: any) => {
    if (isSmallScreen) {
      return;
    }
    if (expandedMovieIndex === index) {
      // Collapse if the same card is clicked again
      setExpandedMovieIndex(null);
    } else {
      setExpandedMovieIndex(index);
    }
  };

  if (isGridView) {
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
            className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 mb-4"
          >
            <div className="col-span-full">
              <MovieListViewCard movie={movies[expandedMovieIndex]} />
            </div>
          </div>
        );
      }

      // Render the row of grid cards
      rows.push(
        <div
          key={`row-${currentRowIndex}`}
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5"
        >
          {rowMovies.map((movie: any, index: number) => {
            const movieIndex = i + index;
            return (
              <div
                key={movieIndex}
                onClick={() => handleCardClick(movieIndex)}
                className={`cursor-pointer bg-darkBlue text-white/70 rounded-lg shadow-lg p-2 m-1 justify-between flex flex-col ${
                  !isSmallScreen && movieIndex === expandedMovieIndex
                    ? "border border-lightBlue"
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

    return <div>{rows}</div>;
  } else {
    return (
      <div className="flex flex-col space-y-4">
        {movies.map((movie, index) => (
          <MovieListViewCard key={index} movie={movie} />
        ))}
      </div>
    );
  }
};

export default MovieList;
