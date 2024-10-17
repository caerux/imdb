import { useState, useEffect } from "react";
import React from "react";
import MovieGridView from "./MovieGridView";
import MovieListViewCard from "./MovieListViewCard";
import Modal from "./Modal";
import MovieDetailPopup from "./MovieDetailPopup";

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
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
  const [columns, setColumns] = useState(getNumberOfColumns());
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      const currentlySmall = window.innerWidth < 640;

      if (currentlySmall !== isSmallScreen) {
        setIsSmallScreen(currentlySmall);
        if (currentlySmall) {
          // Switching to small screen
          if (selectedMovieIndex !== null) {
            setIsModalOpen(true);
          }
        } else {
          // Switching to large screen
          if (isModalOpen) {
            setIsModalOpen(false);
          }
        }
      }

      const newColumns = getNumberOfColumns();
      setColumns(newColumns);

      if (newColumns === 2 && !isGridView) {
        setSelectedMovieIndex(null);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen, isModalOpen, selectedMovieIndex, isGridView]);

  const handleCardClick = (index) => {
    if (isSmallScreen) {
      if (selectedMovieIndex === index) {
        // If the same movie is clicked again, close the modal
        setIsModalOpen(false);
        setSelectedMovieIndex(null);
      } else {
        // Open modal with the selected movie
        setSelectedMovieIndex(index);
        setIsModalOpen(true);
      }
    } else {
      if (selectedMovieIndex === index) {
        // Close the expanded view
        setIsAnimating(true);
        setIsClosing(true);
        setTimeout(() => {
          setSelectedMovieIndex(null);
          setIsAnimating(false);
          setIsClosing(false);
        }, 300);
      } else {
        // Open expanded view for the selected movie
        setSelectedMovieIndex(index);
        setIsAnimating(true);
        setIsClosing(false);
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovieIndex(null);
  };

  // Get the selected movie object for modal
  const selectedMovieObj =
    selectedMovieIndex !== null ? movies[selectedMovieIndex] : null;

  return (
    <>
      {isGridView ? (
        <MovieGridView
          movies={movies}
          columns={columns}
          expandedMovieIndex={!isSmallScreen ? selectedMovieIndex : null}
          isAnimating={isAnimating}
          isClosing={isClosing}
          isSmallScreen={isSmallScreen}
          handleCardClick={handleCardClick}
        />
      ) : (
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
      )}

      {/* Modal for small screens */}
      {isModalOpen && selectedMovieObj && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <MovieDetailPopup movie={selectedMovieObj} />
        </Modal>
      )}
    </>
  );
};

export default MovieList;
