import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ loading, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[50%] p-[10px] border-none bg-[#038eef] text-[#fff] font-bold cursor-pointer "
      disabled={loading}
    >
      {loading ? "loading" : children}
    </button>
  );
}
