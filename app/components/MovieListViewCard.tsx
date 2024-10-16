const MovieListViewCard = ({ movie, isAnimating, isClosing }) => {
  const { Title, Poster, Director, Year, Plot, imdbRating, Language } = movie;

  return (
    <div
      className={`bg-white dark:bg-darkBlue mr-2 rounded-lg shadow-lg w-full ${
        isAnimating
          ? isClosing
            ? "animate-collapseVertical"
            : "animate-expandVertical"
          : ""
      }`}
      style={{ transformOrigin: "center" }}
    >
      <div
        className={`${
          isAnimating
            ? isClosing
              ? "opacity-100 animate-fadeOut"
              : "opacity-0"
            : "opacity-0 animate-fadeIn [animation-delay:300ms]"
        } flex items-center text-gray-700 dark:text-offWhite text-sm lg:text-base`}
      >
        {/* Poster */}
        <div className="w-72 h-96 flex-shrink-0 overflow-hidden rounded-l-lg">
          <img
            src={Poster}
            alt={Title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col mx-10 my-2">
          {/* Title and Rating */}
          <div className="mb-2">
            <h1 className="text-2xl font-bold mb-1 text-black dark:text-white">
              {Title}
            </h1>
            <div className="flex items-center">
              <div className="w-24 h-2 bg-gray-300 dark:bg-gray-500 rounded-full">
                <div
                  className="h-full bg-blue-500 dark:bg-lightBlue rounded-full"
                  style={{ width: `${(imdbRating / 10) * 100}%` }}
                ></div>
              </div>
              <span className="text-lg font-bold text-black dark:text-white ml-2">
                {imdbRating}/10
              </span>
            </div>
          </div>

          {/* Movie Metadata */}
          <div className="text-gray-700 dark:text-white/70 space-y-1">
            <div className="font-semibold flex">
              <div className="w-40">Year:</div>
              <div>{Year}</div>
            </div>
            <div className="font-semibold flex">
              <div className="w-40">Running Time:</div>
              <div>115 Min</div>
            </div>
            <div className="font-semibold flex">
              <div className="w-40">Directed by:</div>
              <div>{Director}</div>
            </div>
            <div className="font-semibold flex">
              <div className="w-40">Language:</div>
              <div>{Language}</div>
            </div>
          </div>

          {/* Plot */}
          <p className="text-black dark:text-white mt-4 mb-4">{Plot}</p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 dark:bg-lightBlue text-white font-bold px-10 py-2 rounded-md">
              Play Movie
            </button>
            <button className="border border-blue-500 dark:border-lightBlue font-bold text-blue-500 dark:text-lightBlue px-6 py-2 rounded-md">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListViewCard;
