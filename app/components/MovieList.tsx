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
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const handleCardClick = (index: number) => {
    if (isSmallScreen) {
      return;
    }
    if (expandedMovieIndex === index) {
      setIsAnimating(true);
      setIsClosing(true);
      setTimeout(() => {
        setExpandedMovieIndex(null);
        setIsAnimating(false);
        setIsClosing(false);
      }, 300);
    } else {
      setExpandedMovieIndex(index);
      setIsAnimating(true);
      setIsClosing(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
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
      <div className="flex flex-col space-y-4 mx-2">
        {movies.map((movie: any, index: React.Key) => (
          <MovieListViewCard
            key={index}
            movie={movie}
            isAnimating={false}
            isClosing={false}
          />
        ))}
      </div>
    );
  }
};

export default MovieList;
