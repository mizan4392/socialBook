import React from "react";
import { stories } from "../../data";
import { img } from "../topBar/TopBar.component";

type Props = {};

export default function Stories({}: Props) {
  return (
    <div className="flex h-[50px] md:h-[150px] md:gap-[20px] lg:h-[250px] gap-[10px]  mb-[30px] relative">
      <div
        style={{ flex: "none", borderRadius: "10px", overflow: "hidden" }}
        className="relative w-[50px] h-[50px] md:flex-1 md:h-auto md:w-auto"
      >
        <img
          src={img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span className=" hidden md:block absolute bottom-[10px] left-[10px] text-white font-medium">
          myself
        </span>
        <button
          className="absolute top-0 left-0 right-0 bottom-0 m-auto md:top-[70%] md:left-[10px] md:m-0 text-white bg-blue-600 border-none w-[30px] h-[30px] cursor-pointer  text-[30px] flex items-center justify-center"
          style={{ borderRadius: "50%" }}
        >
          +
        </button>
      </div>
      {stories?.map((st) => {
        return (
          <div
            key={st.id}
            style={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}
            className="relative"
          >
            <img
              src={st.img}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className="hidden md:block absolute bottom-[10px] left-[10px] text-white font-medium">
              {st.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
