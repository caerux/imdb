"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import LoaderOverlay from "./components/LoaderOverlay";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/movies");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setMovies(data);
        setFilteredMovies(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsGridView(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredMovies(movies);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();

    const filtered = movies.filter(
      (movie: any) =>
        movie.Title.toLowerCase().includes(lowercasedTerm) ||
        movie.Year.toString().includes(lowercasedTerm) ||
        movie.Director.toLowerCase().includes(lowercasedTerm) ||
        movie.Writer.toLowerCase().includes(lowercasedTerm) ||
        movie.Actors.toLowerCase().includes(lowercasedTerm) ||
        movie.Language.toLowerCase().includes(lowercasedTerm)
    );

    setFilteredMovies(filtered);
  };

  if (isLoading) {
    return <LoaderOverlay />;
  }

  return (
    <div className="flex bg-gray-200 dark:bg-backGround">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 px-2 md:px-6 lg:ml-64 relative">
        <Navbar
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          onSearch={handleSearch}
          onSidebarOpen={() => setIsSidebarOpen(true)}
        />

        {filteredMovies.length === 0 ? (
          <div className="text-gray-500 mt-4 text-center">
            No movies found matching your search.
          </div>
        ) : (
          <MovieList movies={filteredMovies} isGridView={isGridView} />
        )}
      </div>
    </div>
  );
};

export default Home;
