import React from "react";
import { Users } from "../../data";
import Card, { CardListItem } from "../Card/Card.component";
import Online from "../Online/Online.component";
import { img } from "../topBar/TopBar.component";

type Props = {};

export default function RightBar({}: Props) {
  return (
    <div
      style={{ flex: 3 }}
      className="no-scrollbar sticky top-[70px] h-[calc(100vh-70px)] overflow-scroll dark:bg-gray-800 dark:text-white"
    >
      <Card title="Suggestion For you">
        {[0, 1, 2].map((itm) => {
          return (
            <CardListItem key={itm}>
              <div className="flex items-center gap-[20px] ">
                <img className="profile-avatar" src={img} />
                <span className="font-bold text-black dark:text-white">
                  Mizan
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <button className="bg-blue-600 border-none p-[5px] text-white cursor-pointer">
                  follow
                </button>
                <button className="bg-red-500 border-none p-[5px] text-white cursor-pointer">
                  dismiss
                </button>
              </div>
            </CardListItem>
          );
        })}
      </Card>
      <Card title="Suggestion For you">
        {[0, 1, 2, 3].map((itm) => {
          return (
            <CardListItem key={itm}>
              <div className="flex items-center gap-[20px]">
                <img className="profile-avatar" src={img} />
                <p>
                  <span className="font-bold text-black dark:text-white">
                    Mizan
                  </span>{" "}
                  changed their cover Pic
                </p>
              </div>
              <span>1min ago</span>
            </CardListItem>
          );
        })}
      </Card>
      <Card title="Online Friends">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((itm) => {
          return (
            <CardListItem key={itm}>
              <div className="flex items-center gap-[20px] relative">
                <img className="profile-avatar" src={img} />
                <div
                  className="absolute w-[12px] h-[12px] bg-lime-400 top-0 left-[25px]"
                  style={{ borderRadius: "50%" }}
                ></div>
                <span className="font-bold text-black dark:text-white">
                  Mizan
                </span>
              </div>
            </CardListItem>
          );
        })}
      </Card>
    </div>
  );
}
