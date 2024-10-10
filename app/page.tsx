"use client";

import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const res = await fetch('api/movies');
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data); 
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Movie List</h1>
        {error ? <p>Error: {error}</p> : <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default Home;
