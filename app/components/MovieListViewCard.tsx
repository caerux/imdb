const MovieListViewCard = ({ movie }) => {
  const { Title, Poster, Genre, Director, Year } = movie;

  return (
    <div className="bg-darkBlue text-white/70 rounded-lg shadow-lg p-4 m-2 flex space-x-4 items-center">
      {/* Poster */}
      <div className="w-28 h-40 flex-shrink-0">
        <img
          src={Poster}
          alt={Title}
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      {/* Movie Details */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold mb-2">{Title}</h2>
        <p className="text-gray-400 mb-1">Genre: {Genre}</p>
        <p className="text-gray-400 mb-1">Director: {Director}</p>
        <p className="text-gray-400">Year: {Year}</p>

        {/* Action Icons */}
        <div className="flex space-x-4 mt-3">
          <img
            src="/icons/play.svg"
            alt="Play"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
          <img
            src="/icons/union.svg"
            alt="Add to Watchlist"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieListViewCard;
