import Image from "next/image";
import profilePic from "/public/EricHoffman.svg";
import { FaSearch } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black opacity-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed w-64 bg-white dark:bg-deepBlue h-screen flex flex-col overflow-y-auto z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:block`}
      >
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

        <div className="pl-8 py-6 flex-shrink-0">
          <MenuItem icon={<FaSearch />} label="Discover" isActive={true} />
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
    </>
  );
};

const MenuItem = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex items-center py-2 space-x-3 hover:text-blue-500 hover:dark:text-lightBlue font-bold dark:hover:text-white cursor-pointer ${
        isActive
          ? "text-blue-500 border-blue-500 dark:text-lightBlue border-r-4 dark:border-lightBlue"
          : "dark:text-offWhite"
      }`}
    >
      {typeof icon === "string" ? (
        <img
          src={`/icons/${icon}.svg`}
          alt={label}
          className={`w-5 h-5 filter ${
            isActive ? "invert-0" : "invert dark:invert-0"
          }`}
        />
      ) : (
        <div
          className={`w-5 h-5 flex items-center ${
            isActive
              ? "text-blue-500 dark:text-lightBlue"
              : "text-gray-500 dark:text-offWhite"
          }`}
        >
          {icon}
        </div>
      )}
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
