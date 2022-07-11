import React from "react";
import { AiTwotoneTag } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
type Props = {};

export default function Share({}: Props) {
  return (
    <div className="w-full h-[170px] rounded-md share-shadow  ">
      <div className="p-10">
        <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-md mr-10 "
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            placeholder="What's in your mind Bob?"
            className="w-[50%] border-none focus:outline-none "
          />
        </div>
        <hr className="m-[20px]" />
        <div className="flex items-center justify-center">
          <div className="flex ml-[20px]">
            <div className="flex items-center mr-[15px] cursor-pointer ">
              <IoMdPhotos className="text-sm mr-3 text-orange-500 " />
              <span className="text-sm font-medium">Photo or Video</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <AiTwotoneTag className="text-sm mr-3 text-blue-500" />
              <span className="text-sm font-medium">Tag</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <HiLocationMarker className="text-sm mr-3 text-green-500 " />
              <span className="text-sm font-medium">Location</span>
            </div>

            <div className="flex items-center mr-[15px] cursor-pointer">
              <BsFillEmojiSmileFill className="text-sm mr-3 text-yellow-500 " />
              <span className="text-sm font-medium">Feelings</span>
            </div>
          </div>
          <button className="border-none px-5 py-1  rounded-md bg-purple-500 font-medium mr-[20px] cursor-pointer text-white">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
