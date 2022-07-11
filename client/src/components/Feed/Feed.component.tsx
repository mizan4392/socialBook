import React from "react";
import Share from "../share/Share.component";

type Props = {};

export default function Feed({}: Props) {
  return (
    <div className="flex-[5.5]">
      <div className="p-20px">
        <Share />
      </div>
    </div>
  );
}
