import profilePicture from "../assets/profile-main.jpg";
import Wheel from "./Wheel";
import Ranking from "./Ranking";
import { Followers } from "../../dist/assets/Svg";
import Profilebg from "../assets/profilebg.png";

function ProfileInfo() {
  return (
    <div className="bg-white p-5 rounded-lg max-w-md mx-auto my-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Make my profile visible to employers
          </h2>
          <p className="text-sm text-gray-500">
            Your profile and career goals will appear when employers search our
            database for candidates.
          </p>
        </div>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            id="toggle"
            className="sr-only peer"
            defaultChecked
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Online Links</h3>
          <button className="text-blue-600">
            <span className="material-icons">add</span>
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Add your online portfolio links to increase your profile strength.
        </p>

        <div className="flex gap-4 mt-4">
          <img
            src="path-to-your-icon/image1.png"
            alt="Icon 1"
            className="w-8 h-8"
          />
          <img
            src="path-to-your-icon/image2.png"
            alt="Icon 2"
            className="w-8 h-8"
          />
          <img
            src="path-to-your-icon/image3.png"
            alt="Icon 3"
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
}

const ProfileDetails = () => (
  <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
    <div className="bg-white p-4 rounded-lg ">
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-900 ">Ayaat Khanna</h2>
        <p className="text-gray-600">UI/UX Designer</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="flex items-center text-gray-600 text-sm gap-2">
            <Followers />
            21 followers
          </span>
          <span className="text-gray-400">·</span>
          <span className="flex items-center text-gray-600 text-sm">
            43 following
          </span>
        </div>
      </div>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <Wheel />
      </div>
      <div>
        <Ranking />
      </div>
    </div>
  </div>
);

export default ProfileDetails;
