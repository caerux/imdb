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
    <div className="flex h-24 items-center justify-between px-2 mt-2 text-white">
      {/* Search Icon and Input */}
      <div
        className={`flex items-center space-x-4 ${
          showSearch ? "bg-[#1A2536] h-14 rounded-xl w-3/4 lg:w-1/2" : ""
        }`}
      >
        <button onClick={() => setShowSearch(!showSearch)} className="pl-4">
          <FaSearch />
        </button>
        {showSearch && (
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Title, Movies, Keyword"
            className="bg-[#1A2536] text-white px-2 py-1 w-5/6 bg-red-500 rounded-md outline-none"
          />
        )}
      </div>

      <div className="hidden tablet:block">
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
