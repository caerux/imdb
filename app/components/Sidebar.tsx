import Image from "next/image";
import profilePic from "/public/EricHoffman.svg";

const Sidebar = () => {
  return (
    <div className="fixed w-64 bg-white dark:bg-deepBlue h-screen flex flex-col overflow-y-auto">
      {/* Profile Section */}
      <div className="flex flex-col py-8 items-center flex-shrink-0">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-gray-700 dark:text-white font-semibold text-lg mt-4">
          Eric Hoffman
        </h2>
      </div>

      <hr className="bg-gray-300 dark:bg-darkBlue h-[1px] border-none flex-shrink-0"></hr>

      {/* Menu Items */}
      <div className="pl-8 py-6 flex-shrink-0">
        <MenuItem icon="Discover" label="Discover" isActive={true} />
        <MenuItem icon="Playlist" label="Playlist" isActive={false} />
        <MenuItem icon="Movie" label="Movie" isActive={false} />
        <MenuItem icon="TVshows" label="TV Shows" isActive={false} />
        <MenuItem icon="MyList" label="My List" isActive={false} />
      </div>

      <hr className="bg-gray-300 dark:bg-darkBlue h-[1px] border-none flex-shrink-0"></hr>

      <div className="pl-8 py-6 flex-shrink-0">
        <MenuItem icon="WatchLater" label="Watch Later" isActive={false} />
        <MenuItem icon="Recommended" label="Recommended" isActive={false} />
      </div>

      <hr className="bg-gray-300 dark:bg-darkBlue h-[1px] border-none flex-shrink-0"></hr>

      <div className="pl-8 py-6 flex-shrink-0">
        <MenuItem icon="Settings" label="Settings" isActive={false} />
        <MenuItem icon="Logout" label="Logout" isActive={false} />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex items-center py-2 space-x-3 text-gray-700 hover:text-lightBlue font-bold dark:hover:text-white cursor-pointer ${
        isActive
          ? "text-lightBlue border-r-4 border-lightBlue"
          : "dark:text-offWhite"
      }`}
    >
      <img
        src={`/icons/${icon}.svg`}
        alt={label}
        className={`w-5 h-5 filter ${
          isActive ? "invert-0" : "invert dark:invert-0"
        }`}
      />
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
