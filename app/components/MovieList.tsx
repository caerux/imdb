import { useState, useEffect } from "react";
import React from "react";
import MovieGridView from "./MovieGridView";
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
      const newColumns = getNumberOfColumns();
      setColumns(newColumns);

      if (newColumns === 2 && !isGridView) {
        setExpandedMovieIndex(null);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isGridView]);

  const isSmallScreen = columns === 2;

  const handleCardClick = (index) => {
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
    return (
      <MovieGridView
        movies={movies}
        columns={columns}
        expandedMovieIndex={expandedMovieIndex}
        isAnimating={isAnimating}
        isClosing={isClosing}
        isSmallScreen={isSmallScreen}
        handleCardClick={handleCardClick}
      />
    );
  } else {
    return (
      <div className="hidden sm:flex flex-col space-y-4 mx-2">
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
