import React from "react";

const MovieDetailPopup = ({ movie }) => {
  const { Title, Poster, Director, Year, Plot, imdbRating, Language } = movie;

  return (
    <div className="text-xs mobileL:text-sm text-black dark:text-offWhite bg-white dark:bg-darkBlue rounded-md overflow-y-auto max-h-[400px]">
      {/* Header Section */}
      <div className="flex flex-row sm:flex-row items-center">
        {/* Poster */}
        <div className="w-1/3 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={Poster}
            alt={`Poster of ${Title}`}
            className="w-full max-h-72 h-auto object-cover"
          />
        </div>

        {/* Movie Metadata */}
        <div className="text-gray-700 dark:text-offWhite space-y-2 ml-2 mobileM:ml-4">
          <div className="font-semibold flex">
            <div className="w-24">Year:</div>
            <div>{Year}</div>
          </div>
          <div className="font-semibold flex">
            <div className="w-24">Running Time:</div>
            <div>115 Min</div>
          </div>
          <div className="font-semibold flex">
            <div className="w-24">Directed by:</div>
            <div>{Director}</div>
          </div>
          <div className="font-semibold flex">
            <div className="w-24">Language:</div>
            <div>{Language}</div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4">
        {/* Title and Rating */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold mb-1">{Title}</h1>
          <div className="flex items-center">
            <div className="w-24 h-2 bg-gray-300 rounded-full dark:bg-gray-600">
              <div
                className="h-full bg-blue-500 dark:bg-lightBlue rounded-full"
                style={{ width: `${(imdbRating / 10) * 100}%` }}
              ></div>
            </div>
            <span className="text-lg font-bold ml-2">{imdbRating}/10</span>
          </div>
        </div>

        {/* Plot */}
        <p className="mb-4">{Plot}</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 dark:bg-lightBlue border-blue-500 dark:border-lightBlue text-white font-bold px-10 py-2 rounded-md ">
            Play Movie
          </button>
          <button className="border border-blue-500 dark:border-lightBlue font-bold text-blue-500 dark:text-lightBlue px-6 py-2 rounded-md ">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPopup;
