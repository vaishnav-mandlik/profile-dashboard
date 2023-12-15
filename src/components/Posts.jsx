import { AiFillLike } from "react-icons/ai";
import post from "../assets/post.png";
import postProfile from "../assets/post-profile.jpg";
import profilePicture from "../assets/profile-main.jpg";
import kashish from "../assets/kashish.png";
import suraj from "../assets/suraj.png";
import { IoMdText } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

const ProfileName = () => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center">
      <img
        className="h-12 w-12 rounded-full"
        src={postProfile}
        alt="User avatar placeholder"
      />
      <div className="ml-4">
        <div className="text-gray-800 font-bold text-sm">Karim Saif</div>
        <div className="text-gray-400 text-xs">
          14 min ago on
          <span className="text-gray-800"> Figma Community</span>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <div className="bg-[#7B74FF] rounded-full p-1">
        <IoPencil className="h-4 w-4 text-white cursor-pointer" />
      </div>
      <div className="bg-[#7B74FF] rounded-full p-1">
        <MdDelete className="h-4 w-4 text-white cursor-pointer" />
      </div>
    </div>
  </div>
);

const Chats = () => (
  <div className="border-t border-gray-200">
    <div className="flex items-start text-black space-x-2 p-4 border-gray-300 last:border-b-0">
      <img className="w-8 h-8 rounded-full" src={kashish} alt={`Profile `} />
      <div className="flex-1">
        <p className="font-semibold text-sm">Kashish Roy </p>
        <p className="text-xs w-full text-gray-500  md:w-2/5">
          I loved Northern Ireland and spent some of the very memorable days.
        </p>
        <div className="flex items-center text-gray-500  text-[10px] mt-2">
          <p className="hover:text-gray-700 focus:outline-none">
            <i className="far fa-thumbs-up"></i>
            <span className="ml-1">Like</span>
          </p>
          <span>·</span>
          <span>5</span>
          {/* <span>·</span> */}
          <p className="hover:text-gray-700 focus:outline-none ml-2">
            <span>Reply</span>
          </p>
          <span>·</span>
          <span className="ml-2">1 Reply</span>
        </div>
      </div>
    </div>
    <div className="ml-16">
      <div className="flex  text-black space-x-4 border-gray-300  ">
        <div className="flex items-start text-black space-x-2 border-gray-300 last:border-b-0">
          <img className="w-8 h-8 rounded-full" src={suraj} alt={`Profile`} />
          <div className="flex-1">
            <p className="font-semibold text-sm">Suraj Deb</p>
            <p className="text-xs text-gray-500">I agree with this.</p>
          </div>
        </div>
      </div>
      <div className="text-start py-2 ml-20 mt-4">
        <p className="text-gray-600  font-semibold text-xs">
          Load more comments
        </p>
      </div>
    </div>
  </div>
);

const Comment = () => (
  <div className="flex items-center p-0.5 bg-[#F6F9FF]  rounded-full ">
    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 ">
      <img
        src={profilePicture}
        alt="user avatar"
        className="object-cover w-full h-full"
      />
    </div>
    <input
      type="text"
      placeholder="Write a comment..."
      className="flex-1 bg-[#F6F9FF]  p-2 text-sm border-none focus:ring-0"
    />
    <span className="text-gray-400 mx-2">
      <FaRegSmile size={20} />
    </span>
    <span className="text-gray-500">
      <CiImageOn size={20} />
    </span>
  </div>
);

function Posts() {
  return (
    <div className="w-full lg:w-5/5 ">
      <div className="bg-white p-4 border-t rounded-b-lg border-gray-200 shadow mb-4">
        <div>
          <ProfileName />
          <div className="mb-4">
            <p className="text-gray-800 text-sm">
              What is the reason guys, yesterday I uploaded some type of content
              and they approved it and today I tried to upload they say we no
              longer accept thi
            </p>
          </div>
          <div className="mb-4">
            <img className="w-full rounded-lg" src={post} alt="Post image" />
          </div>
          <div className="flex items-center justify-start gap-7 mb-4">
            <div className="flex items-center">
              <AiFillLike className="text-blue-500 mr-1 text-xl" />

              <span className="text-gray-600 text-sm">1.9k</span>
            </div>
            <div className="flex items-center">
              <IoMdText className="text-gray-600 mr-1 text-xl" />
              <span className="text-gray-400 text-sm">45</span>
            </div>
            <FiSend className="text-gray-400 mr-1 text-xl" />
          </div>
        </div>
        <Chats />
        <div className="pt-14 border-b border-gray-300 mb-3">
          <ProfileName />
          <div className="mb-4">
            <p className="text-gray-800 text-sm">
              Need some project that will earn me money.
              <br />I am a developer with around 13 years experience. And
              recently my work does not inspire me much, feels not challenging
              to me. And I have lots of time to waste away. Do not judge me
              here, I read books, am a plant mom to loads of plants, but still
              feel too less mentally stimulated. I just love coding! Any help is
              really appreciated my fellow developers
            </p>
          </div>

          <div className="flex items-center justify-start mb-4 gap-7">
            <div className="flex items-center">
              <AiFillLike className="text-blue-500 mr-1 text-xl" />

              <span className="text-gray-600 text-sm">1.9k</span>
            </div>
            <div className="flex items-center">
              <IoMdText className="text-gray-400 mr-1 text-xl" />
              <span className="text-gray-600 text-sm">45</span>
            </div>
            <FiSend className="text-gray-400 mr-1 text-xl" />
          </div>
        </div>
        <Comment />
        <div className="text-start py-2  m-2">
          <p className="text-gray-600  font-semibold text-xs">
            Load more comments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
