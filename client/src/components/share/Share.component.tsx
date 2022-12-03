import React, { useContext, useState } from "react";
import { AiTwotoneTag } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import { dummyUser } from "../topBar/TopBar.component";
import { useMutation } from "react-query";
import { queryClient } from "../../App";
import { makeRequest } from "../../utils/axios";
type Props = {};

export default function Share({}: Props) {
  const { user } = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<any>();

  const mutation: any = useMutation(
    (newPost) => {
      return makeRequest.post("/post", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  return (
    <div className="w-full min-h-[170px] h-auto rounded-md share-shadow my-2 ">
      <div className="p-10">
        <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-md mr-10 "
            src={user?.profilePic ? user?.profilePic : dummyUser}
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user?.userName}?`}
            className="w-[50%] border-none focus:outline-none "
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <hr className="m-[20px]" />
        {file ? <img src={URL.createObjectURL(file)} alt="" /> : null}

        <div className="flex items-center justify-between">
          <input
            type={"file"}
            id="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) {
                setFile(e?.target?.files[0]);
              }
            }}
          />
          <div className="flex ml-[20px]">
            <label htmlFor="file">
              <div className="flex items-center mr-[15px] cursor-pointer ">
                <IoMdPhotos className="text-sm mr-3 text-orange-500 " />
                <span className="text-sm font-medium">Photo or Video</span>
              </div>
            </label>

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
          <button
            onClick={(e) => {
              e.preventDefault();
              mutation.mutate({ description });
            }}
            className="border-none px-5 py-1  rounded-md bg-purple-500 font-medium mr-[20px] cursor-pointer text-white"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
