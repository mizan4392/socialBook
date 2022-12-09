import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import Modal from "react-responsive-modal";
import { queryClient } from "../../App";
import { UserContext } from "../../context/UserContext";
import { makeRequest } from "../../utils/axios";

type Props = {
  onClose: () => void;
};

export default function UpdateUserInfoModal({ onClose }: Props) {
  const { user } = useContext(UserContext);
  const [updatePayload, setUpdatePayload] = useState<any>({
    fullName: user?.fullName,
    address: user?.address,
    website: user?.website,
    faceBook: user?.faceBook,
    instagram: user?.instagram,
    twitter: user?.twitter,
    linkedIn: user?.linkedIn,
    pinterest: user?.pinterest,
  });
  const [coverPic, setCoverPic] = useState<any>();
  const [profilePic, setProfilePic] = useState<any>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatePayload((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const mutation: any = useMutation(
    (payload) => {
      return makeRequest.patch("/user", payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userInfo"]);
        onClose();
      },
    }
  );

  const handleClick = () => {
    const formData = new FormData();
    Object.keys(updatePayload)?.forEach((key) => {
      formData.append(key, updatePayload[key]);
    });
    if (coverPic) {
      console.log("coverPic", coverPic);
      formData.append("files", coverPic, `cover_pic_${coverPic?.name}`);
    }
    if (profilePic) {
      formData.append("files", profilePic, `profile_pic_${profilePic?.name}`);
    }
    mutation.mutate(formData);
  };
  return (
    <Modal
      open={true}
      onClose={onClose}
      styles={{
        modal: {
          width: "80%",
        },
      }}
    >
      <h2>Simple centered modal</h2>
      <hr />
      <form className="flex flex-col gap-[30px] p-[10px]">
        <input
          type="text"
          placeholder="FullName"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="fullName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Address"
          className="border-none text-[black] "
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="address"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Website"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="website"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="FaceBook profile link"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="faceBook"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Instagram profile link"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="instagram"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Twitter profile link"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="twitter"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="LinkedIn profile link"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="linkedIn"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Pinterest profile link"
          className="border-none text-[black]"
          style={{
            borderBottom: "1px solid lightgray",
            padding: "20px 10px",
          }}
          name="pinterest"
          onChange={handleInputChange}
        />

        <label>Upload cover photo</label>
        <input
          type={"file"}
          id="file"
          onChange={(e) => {
            if (e.target.files?.length) {
              setCoverPic(e?.target?.files[0]);
            }
          }}
        />
        <label>Upload profile photo</label>
        <input
          type={"file"}
          id="file"
          onChange={(e) => {
            if (e.target.files?.length) {
              setProfilePic(e?.target?.files[0]);
            }
          }}
        />
      </form>
      <div className="flex gap-2 mt-5">
        <button
          onClick={handleClick}
          className="w-[50%] p-[10px] border-none bg-[#038eef] text-[#fff] font-bold cursor-pointer "
        >
          Update
        </button>
        <button
          onClick={onClose}
          className="w-[50%] p-[10px] border-none bg-[#038eef] text-[#fff] font-bold cursor-pointer "
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
