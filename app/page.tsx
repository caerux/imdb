"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  const fetchMovies = async () => {
    try {
      const res = await fetch("api/movies");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data);
      setFilteredMovies(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
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

  return (
    <div className="flex bg-gray-200 dark:bg-backGround">
      <div className="w-64 hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 px-2 md:px-6">
        <Navbar
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          onSearch={handleSearch}
        />

        <MovieList movies={filteredMovies} isGridView={isGridView} />
      </div>
    </div>
  );
};

export default Home;
