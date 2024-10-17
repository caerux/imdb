const MovieGridViewCard = ({ movie }) => {
  const { Title, Poster } = movie;

  return (
    <div tabIndex={0}>
      <div className="flex">
        <img
          src={Poster}
          alt={Title}
          className="rounded-md mb-2 w-full h-40 mobileM:h-48 mobileL:h-64 sm:h-64 object-cover"
        />
      </div>

      <div>
        <h2 className="text-md font-semibold text-left mb-2 truncate text-gray-700 dark:text-white">
          {Title}
        </h2>
        <div className="flex w-full space-x-4 mb-1">
          <img
            src="/icons/play.svg"
            alt="Play"
            className="w-6 h-6 cursor-pointer hover:opacity-80 filter invert-80 dark:filter-none"
          />
          <img
            src="/icons/union.svg"
            alt="Play"
            className="w-6 h-6 cursor-pointer hover:opacity-80 filter invert-80 dark:filter-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieGridViewCard;
