import React, { useContext, useEffect, useState } from "react";
import {
  AiFillInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";
import {
  MdEmail,
  MdFacebook,
  MdLanguage,
  MdLocationPin,
  MdMoreVert,
} from "react-icons/md";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";

import PostWrapper from "../../components/post/PostWrapper.component";
import {
  dummyCover,
  dummyUser,
} from "../../components/topBar/TopBar.component";
import { UserContext, UserI } from "../../context/UserContext";
import { makeRequest } from "../../utils/axios";
import { CORE_STORAGE_URL } from "../../utils/environment";

type Props = {};

export default function Profile({}: Props) {
  const [user, setUser] = useState<UserI>();
  const userContext = useContext(UserContext);
  const location = useLocation();
  const { isLoading, isError, error, data }: any = useQuery(
    ["userInfo"],
    () => {
      if (location?.pathname) {
        const parts = location?.pathname?.split("/");
        const id = parts[parts.length - 1];
        return makeRequest
          .get(`/user/user-by-id?userId=${id}`)
          .then((res) => res.data);
      }
    }
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <div className="">
      <div className="w-full h-[300px] relative">
        <img
          src={
            user?.coverPic ? `${CORE_STORAGE_URL}/${user.coverPic}` : dummyCover
          }
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src={
            user?.profilePic
              ? `${CORE_STORAGE_URL}/${user.profilePic}`
              : dummyUser
          }
          alt=""
          className="w-[200px] h-[200px] object-cover absolute left-0 right-0 m-auto top-[200px]"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="p-[10px] md:px-[20] md:py-[70px] ">
        <div
          className="shadow h-[30vh] md:h-[180px] p-[20px] md:p-[50px] flex items-center justify-between mb-[20px] flex-col md:flex-row mt-[100px] md:mt-0 "
          style={{ borderRadius: "20px" }}
        >
          <div className="flex gap-[10px]" style={{ flex: 1 }}>
            {user?.faceBook ? (
              <a href={user?.faceBook} target="_blank">
                <MdFacebook fontSize="large" />
              </a>
            ) : null}

            {user?.instagram ? (
              <a href={user.instagram} target="_blank">
                <AiFillInstagram fontSize="large" />
              </a>
            ) : null}
            {user?.twitter ? (
              <a href={user.twitter} target="_blank">
                <AiOutlineTwitter fontSize="large" />
              </a>
            ) : null}

            {user?.linkedIn ? (
              <a href={user.linkedIn} target="_blank">
                <AiOutlineLinkedin fontSize="large" />
              </a>
            ) : null}
            {user?.pinterest ? (
              <a href={user.linkedIn} target="_blank">
                <IoLogoPinterest fontSize="large" />
              </a>
            ) : null}
          </div>
          <div
            className=" flex flex-col items-center gap-[10px]"
            style={{ flex: 1 }}
          >
            <span className="text-[30px] font-medium">{user?.userName}</span>
            <div className=" w-full flex items-center justify-around">
              <div className=" flex items-center gap-[5px]">
                <MdLocationPin />
                <span className="text-[12px]">{user?.address}</span>
              </div>
              <div className="flex items-center gap-[5px]">
                <MdLanguage />
                <a href={user?.website} target="_blank" className="text-[12px]">
                  {user?.website}
                </a>
              </div>
            </div>
            <button
              className="border-none bg-[#5271ff] text-white cursor-pointer"
              style={{ borderRadius: "5px", padding: "10px 20px" }}
            >
              {userContext?.user?.id === user?.id ? "Update" : "Follow"}
            </button>
          </div>
          <div
            className="flex items-center justify-end gap-[10px]"
            style={{ flex: 1 }}
          >
            <a href={`mailto:${user?.email}`}>
              <MdEmail />
            </a>

            <MdMoreVert />
          </div>
        </div>
        <PostWrapper isProfile={true} />
      </div>
    </div>
  );
}
