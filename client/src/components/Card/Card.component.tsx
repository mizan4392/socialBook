import React from "react";
import { img } from "../topBar/TopBar.component";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: Props) {
  return (
    <div className="p-[20px]">
      <div className="shadow p-[20px]">
        {title ? <span className="text-gray-400">{title}</span> : null}
        {children}
      </div>
    </div>
  );
}

export interface CardListItemI {
  children: React.ReactNode;
}

export const CardListItem = ({ children }: CardListItemI) => {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        margin: "15px 0px",
      }}
    >
      {children}
    </div>
  );
};
