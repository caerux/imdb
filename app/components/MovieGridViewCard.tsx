const MovieGridViewCard = ({ movie }) => {
  const { Title, Poster } = movie;

  return (
    <div
      className="bg-darkBlue text-white/70 rounded-lg shadow-lg p-2 m-1 justify-between flex flex-col "
      tabIndex={0}
    >
      <div className="flex">
        <img
          src={Poster}
          alt={Title}
          className="rounded-md mb-4 w-full h-40 mobileM:h-48 mobileL:h-64 sm:h-64 object-cover"
        />
      </div>

      <div>
        <h2 className="text-md font-semibold text-left mb-3">{Title}</h2>
        <div className="flex w-full space-x-4">
          <img
            src="/icons/play.svg"
            alt="Play"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
          <img
            src="/icons/union.svg"
            alt="Play"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieGridViewCard;
