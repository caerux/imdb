import { useState } from "react";
import { FaTh, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/themeContext";

const Navbar = ({ isGridView, setIsGridView, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleSearchChange = (event: { target: { value: any } }) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="flex h-24 items-center justify-between px-2 mt-2 text-black dark:text-white">
      {/* Search Icon and Input */}
      <div className="flex items-center w-full">
        {/* Search Input Container */}
        <div
          className={`flex items-center bg-white dark:bg-darkerBlue h-14 rounded-xl transition-all duration-300 ease-in-out overflow-hidden ${
            showSearch ? "w-3/4 lg:w-1/2 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Title, Movies, Keyword"
              className="bg-white dark:bg-darkerBlue text-black dark:text-white px-4 py-2 pl-12 w-full text-lg rounded-md outline-none"
              autoFocus={showSearch}
            />
            <img
              src="icons/SearchIcon.svg"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 filter invert dark:filter-none"
            />

            <button
              onClick={() => {
                setShowSearch(false);
                setSearchTerm("");
                onSearch("");
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg focus:outline-none"
            >
              <img
                src="icons/cross.svg"
                className="filter invert dark:filter-none"
              />
            </button>
          </div>
        </div>

        {/* Search Icon Button */}
        <button
          onClick={() => setShowSearch(true)}
          className={`pl-4 focus:outline-none transition-opacity duration-300 ease-in-out ${
            showSearch ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src="icons/SearchIcon.svg"
            className="filter invert dark:filter-none"
          />
        </button>
      </div>

      {/* Toggle View Button */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <img src="icons/sun.svg" alt="Switch to Light Mode" />
          )}
        </button>

        {/* Toggle View Button */}
        {isGridView ? (
          <button
            onClick={() => setIsGridView(false)}
            className="focus:outline-none"
            aria-label="Switch to List View"
          >
            <img
              src="icons/ListViewIcon.svg"
              alt="List View Icon"
              className="filter invert dark:filter-none"
            />
          </button>
        ) : (
          <button
            onClick={() => setIsGridView(true)}
            className="focus:outline-none"
            aria-label="Switch to Grid View"
          >
            <FaTh />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
