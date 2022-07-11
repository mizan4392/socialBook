import { UserI } from "../../data";

export type ICloseFriends = {
  user: UserI;
};
export default function CloseFriend({ user }: ICloseFriends) {
  return (
    <li className="flex items-center mb-[15px]">
      <img
        className="w-[32px] h-[32px] rounded-md mr-[10px] "
        src={user.profilePicture}
        alt=""
      />
      <span>{user.username}</span>
    </li>
  );
}
