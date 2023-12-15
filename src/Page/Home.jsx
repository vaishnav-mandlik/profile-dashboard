import profilePicture from "../assets/profile-main.jpg";
import { CiMail, CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Profilebg from "../assets/profilebg.png";
import { FaPencilAlt } from "react-icons/fa";
import SideNav from "../components/SideNav";
import ProfileDetails from "../components/ProfileDetails";
import Feed from "../components/Feed";
import GroupList from "../components/GroupList";
import sphere from "../assets/sphere.png";

function Home() {
  return (
    <div className="flex w-full flex-col md:flex-row overflow-hidden bg-gray-100">
      <aside className="w-full md:w-64 bg-white  border-r border-gray-200 hidden md:block">
        <div className="md:w-54 bg-white p-6">
          <div className="flex items-center mb-6 ml-4">
            <img src={sphere} alt="s" className="w-8 h-10 rounded-full" />
            <div className="text-black font-normal text-lg ">sphere</div>
          </div>
          <SideNav />
          <div className="border border-gray-200 rounded-md"></div>
          <GroupList />
        </div>
      </aside>
      <div className="flex-1 w-full flex flex-col ">
        <header className="flex justify-end items-center p-3 bg-white border-b border-gray-200 ">
          <div className="flex items-center border rounded-sm border-[#7976FF]">
            <div className="p-2">
              <CiSearch className="text-xl text-black" />
            </div>
            <div className="border-l border-[#7976FF] font-bold text-sm">|</div>
            <div className="">
              <input
                type="text"
                className="bg-white text-black pr-4 py-2 text-sm w-64"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex ml-2 gap-2">
              <div className="border border-[#7976FF] rounded-md p-0.5">
                <CiMail className="text-3xl text-[#7976FF]" />
              </div>
              <div className="border border-[#7976FF] rounded-md p-0.5">
                <IoIosNotificationsOutline className="text-3xl text-[#7976FF]" />
              </div>
              <img
                src={profilePicture}
                alt="profile"
                className="w-10 h-10 rounded-full border  border-[#7976FF] p-1"
              />
            </div>
          </div>
        </header>
        <div className=" relative">
          <img src={Profilebg} alt="bg image" className="w-full h-28 md:h-48" />
          <div className="absolute right-10 top-4 p-1 transform border-2 rounded-full bg-white border-black">
            <FaPencilAlt className="text-md text-[#7976FF]" />
          </div>
          <div className="absolute left-[20%] md:left-[13%] transform -translate-x-1/2 -bottom-16">
            <img
              src={profilePicture}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="md:flex border-2 w-full">
          <ProfileDetails />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Home;
