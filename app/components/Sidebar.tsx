import Image from "next/image";
import profilePic from "/public/EricHoffman.svg";

const Sidebar = () => {
  return (
    <div className="fixed w-64 bg-deepBlue text-white h-screen flex flex-col">
      <div>
        <div className="flex flex-col py-8 items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden ">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h2 className="text-white font-semibold text-lg mt-4">
            Eric Hoffman
          </h2>
        </div>
        <hr className="bg-darkBlue h-px border-none"></hr>
      </div>

      <div>
        <div className="space-y-4 p-8">
          <MenuItem icon="Discover" label="Discover" />
          <MenuItem icon="Playlist" label="Playlist" />
          <MenuItem icon="Movie" label="Movie" />
          <MenuItem icon="TVshows" label="TV Shows" />
          <MenuItem icon="MyList" label="My List" />
        </div>
        <hr className="bg-darkBlue h-px border-none"></hr>
        <div className="space-y-6 p-8">
          <MenuItem icon="WatchLater" label="Watch Later" />
          <MenuItem icon="Recommended" label="Recommended" />
        </div>
        <hr className="bg-darkBlue h-px border-none"></hr>
        <div className="space-y-4 p-8">
          <MenuItem icon="Settings" label="Settings" />
          <MenuItem icon="Logout" label="Logout" />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-3 text-[#D4D7DD] font-bold hover:text-white cursor-pointer">
      <img src={`/icons/${icon}.svg`} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
