import React from "react";
import { stories } from "../../data";
import { img } from "../topBar/TopBar.component";

type Props = {};

export default function Stories({}: Props) {
  return (
    <div className="flex gap-[10px] h-[250px] mb-[30px] relative">
      <div
        style={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}
        className=""
      >
        <img
          src={img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span className="absolute bottom-[10px] left-[10px] text-white font-medium">
          myself
        </span>
        <button
          className="absolute bottom-[40px] left-[10px] text-white bg-blue-600 border-none w-[30px] h-[30px] cursor-pointer  text-[30px] flex items-center justify-center"
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
            <span className="absolute bottom-[10px] left-[10px] text-white font-medium">
              {st.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
