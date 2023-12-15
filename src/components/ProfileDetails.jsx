import Wheel from "./Wheel";
import Ranking from "./Ranking";
import { Followers } from "../../dist/assets/Svg";
import { FaCirclePlus } from "react-icons/fa6";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";

function ProfileInfo() {
  return (
    <div className="bg-white rounded-lg w-full my-3">
      <div className=" items-center justify-between hidden md:block mb-4">
        <div className=" flex flex-col justify-start">
          <div className="flex justify-between">
            <h2 className="text-[10px] font-semibold text-gray-800">
              Make my profile visible to employers
            </h2>
            <label className="inline-flex relative items-center cursor-pointer ">
              <input
                type="checkbox"
                value=""
                id="toggle"
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-7 h-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#7976FF]"></div>
            </label>
          </div>

          <p className="text-[8px] text-gray-500">
            Your profile and career goals will appear when employers search our
            database for candidates.
          </p>
        </div>
      </div>

      <div className="border-t pt-4 hidden md:block">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold text-gray-800">
            Online Links
          </p>
          <div className="text-[#7976FF] text-lg">
            <FaCirclePlus />
          </div>
        </div>
        <p className="text-[8px] text-gray-500 mt-0.5">
          Add your online portfolio links to increase your profile strength.
        </p>

        <div className="flex gap-4 mt-4 p-2 justify-center items-center bg-[#F6F9FF] rounded-xl">
          <img src={l1} alt="Icon 1" className="w-6 h-6" />
          <img src={l2} alt="Icon 2" className="w-6 h-6" />
          <img src={l3} alt="Icon 3" className="w-6 h-6" />
        </div>
      </div>
      <div className=" w-full  md:hidden block">
        <div className="flex  flex-col gap-4 mt-4 p-2 justify-center border border-[#7270f7] items-center bg-[#F6F9FF] rounded-xl">
          <p className="text-[14px] text-start font-semibold text-gray-800">
            Online Links
          </p>
          <div className="flex gap-4 mb-4">
            <img src={l1} alt="Icon 1" className="w-6 h-6" />
            <img src={l2} alt="Icon 2" className="w-6 h-6" />
            <img src={l3} alt="Icon 3" className="w-6 h-6" />
            <div className="text-[#7976FF] text-lg">
              <FaCirclePlus />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <h2 className="text-[7px] font-semibold text-gray-800">
            Make my profile visible to employers
          </h2>
          <label className="inline-flex border relative items-center cursor-pointer ">
            <input
              type="checkbox"
              value=""
              id="toggle"
              className="sr-only peer"
              defaultChecked
            />
            <div className="w-5 h-3  bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2.5 after:w-2.5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7976FF]"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

const ProfileDetails = () => (
  <div className="w-full lg:w-2/6 mb-4 lg:mb-0  ml-4 md:ml-0 md:mt-0">
    <div className="bg-white p-4 rounded-lg ">
      <div className="text-center -mt-4 md:mt-12">
        <h2 className="text-2xl font-bold text-gray-900 ">Ayaat Khanna</h2>
        <p className="text-gray-500 text-sm md:text-xs">UI/UX Designer</p>
      </div>
      <div className="flex md:justify-center text-sm md:text-[10px] mt-6 text-black gap-3 md:mt-2">
        <span className="flex items-center  gap-1">
          <Followers />
          21 followers
        </span>
        <span className="flex items-center  ">43 following</span>
      </div>

      <div className="hidden md:block">
        <div className="">
          <ProfileInfo />
        </div>
        <div className=" flex flex-col border border-[#a8c4fb] rounded-xl bg-[#F6F9FF] justify-center items-center">
          <p className="text-xs mt-4 font-semibold text-gray-800">
            Wheel of Opporunities
          </p>
          <Wheel />
        </div>
        <div>
          <Ranking />
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex">
          <div>
            <div className=" w-full">
              <ProfileInfo />
            </div>
            <div className="border border-[#a8c4fb] rounded-xl bg-[#F6F9FF]">
              <Ranking />
            </div>
          </div>
          <div className=" flex flex-col ml-3 border border-[#a8c4fb] rounded-xl bg-[#F6F9FF] justify-center items-center">
            <p className="text-xs mt-4 font-semibold text-gray-800">
              Wheel of Opporunities
            </p>
            <Wheel />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileDetails;
