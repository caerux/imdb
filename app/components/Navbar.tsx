import { useState } from "react";
import { FaSearch, FaTh, FaList } from "react-icons/fa";

const Navbar = ({ isGridView, setIsGridView, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: { target: { value: any } }) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="flex items-center justify-between p-4 text-white">
      {/* Search Icon and Input */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch />
        </button>
        {showSearch && (
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search movies..."
            className="bg-gray-700 text-white px-2 py-1 rounded-md outline-none"
          />
        )}
      </div>

      <div>
        {isGridView ? (
          <button onClick={() => setIsGridView(false)} className="">
            <FaList />
          </button>
        ) : (
          <button onClick={() => setIsGridView(true)} className="">
            <FaTh />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
