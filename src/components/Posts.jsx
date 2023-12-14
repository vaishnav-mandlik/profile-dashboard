import { AiFillLike } from "react-icons/ai";
import post from "../assets/post.png";
import postProfile from "../assets/post-profile.jpg";
import { IoMdText } from "react-icons/io";
import NavFeed from "./NavFeed";
import { useState } from "react";
import React from "react";
import {
  IoBriefcase,
  IoSchool,
  IoEllipse,
  IoAdd,
  IoPencil,
} from "react-icons/io5";

function Posts() {
  return (
    <div className="w-full lg:w-5/5 ">
      <div className="bg-white p-4 border-t border-gray-200 shadow mb-4">
        <div>
          <div className="flex items-center mb-4">
            <img
              className="h-12 w-12 rounded-full"
              src={postProfile}
              alt="User avatar placeholder"
            />
            <div className="ml-4">
              <div className="text-gray-800 font-bold text-sm">Karim Saif</div>
              <div className="text-gray-600 text-xs">
                14 min ago on Figma Community
              </div>
            </div>
          </div>
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
              <AiFillLike className="text-blue-500 mr-1 text-2xl" />

              <span className="text-gray-600 text-sm">1.9k</span>
            </div>
            <div className="flex items-center">
              <IoMdText className="text-gray-600 mr-1 text-2xl" />
              <span className="text-gray-600 text-sm">45</span>
            </div>
          </div>
        </div>
        <div className="pt-14 ">
          <div className="flex items-center mb-4">
            <img
              className="h-12 w-12 rounded-full"
              src={postProfile}
              alt="User avatar "
            />
            <div className="ml-4">
              <div className="text-gray-800 font-bold text-sm">Karim Saif</div>
              <div className="text-gray-600 text-xs">
                14 min ago on Figma Community
              </div>
            </div>
          </div>
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
              <AiFillLike className="text-blue-500 mr-1 text-2xl" />

              <span className="text-gray-600 text-sm">1.9k</span>
            </div>
            <div className="flex items-center">
              <IoMdText className="text-gray-600 mr-1 text-2xl" />
              <span className="text-gray-600 text-sm">45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
