import React from "react";
import { CiMusicNote1 } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa"; // This icon is used for the avatar

const GroupList = () => {
  // Dummy data for the list of groups
  const groups = [
    { name: "Indonesia UI Designer", members: 734 },
    { name: "Indonesia UX Researcher", members: 125 },
    { name: "Prototyping Club", members: 891 },
    { name: "Indonesia UI Designer", members: 241 },
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Communities Feed</h3>
      <ul>
        <li className="mb-2">
          <a
            href="#"
            className="flex justify-center items-center text-gray-700 hover:text-blue-600"
          >
            <div className="border border-[#7976FF] rounded-full w-6 h-6">
              <CiMusicNote1 className="text-[#7976FF] text-2xl p-1" />
            </div>
            <div className="flex flex-col ml-2">
              <p className=" text-xs"> Indonesia UI Designer</p>
              <span className="text-gray-500 text-xs">734 members</span>
            </div>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex justify-center items-center text-gray-700 hover:text-blue-600"
          >
            <div className="border border-[#7976FF] rounded-full w-6 h-6">
              <CiMusicNote1 className="text-[#7976FF] text-2xl p-1" />
            </div>
            <div className="flex flex-col ml-2">
              <p className=" text-xs"> Indonesia UX Research</p>
              <span className="text-gray-500 text-xs">734 members</span>
            </div>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <div className="border border-[#7976FF] rounded-full w-6 h-6">
              <CiMusicNote1 className="text-[#7976FF] text-2xl p-1" />
            </div>
            <div className="flex flex-col ml-2">
              <p className=" text-xs">Prototyping club</p>
              <span className="text-gray-500 text-xs">734 members</span>
            </div>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <div className="border border-[#7976FF] rounded-full w-6 h-6">
              <CiMusicNote1 className="text-[#7976FF] text-2xl p-1" />
            </div>
            <div className="flex flex-col ml-2">
              <p className=" text-xs">UI Designer</p>
              <span className="text-gray-500 text-xs">734 members</span>
            </div>
          </a>
        </li>
      </ul>
      <p className="text-blue-600 text-sm mt-2">Show 5 more </p>
    </div>
  );
};

export default GroupList;
