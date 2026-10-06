import {
  Rocket,
  Headphones,
  SquareUser,
  Star,
  User,
  TextSearch,
  MessagesCircle,
} from "lucide-react";

import { useFrContext } from "./Context";
import { users } from "../public/data/users";

import Dms from "./Dms";
import Channel from "./Channel";

export default function Chats({ user = "user1" }: { user?: string }) {
  const { selectedFriendInfo, setSelectedFriendInfo, setCurConvoId, setCurConvo } =
    useFrContext();

  const userInfo = users.user1;

  return (
    <div className="chats bg-[#1b0d1e] px-4 py-2 h-full mt-3 text-[#fcecff94]">
      <button className="flex p-2 rounded-lg border border-[#9a959557] w-full items-center justify-center gap-2 my-2 ">
        <Rocket /> Upgrade Plan
      </button>
      <ul>
        <li className="rounded-md border border-[#9a959557] flex items-center">
          <TextSearch size={16} className="sticky left-24 text-[#ffffffab]" />
          <input
            className={`px-2 py-1`}
            type="text"
            placeholder="Find a conversation..."
          />
        </li>

        <ul className="my-3 pb-3 border-b border-[#9a959557]">
          <li className="flex gap-2 items-center my-2">
            <Headphones /> Huddles
          </li>
          <li className="flex gap-2 items-center my-2">
            <SquareUser /> Directories
          </li>
        </ul>

        <li className="mb-5">
          <span className="flex gap-2 items-center">
            <Star /> Starred
          </span>
          <p className="ml-4 mt-1">Drag and drop important stuff here</p>
        </li>
        <li>
          <span className="rounded-sm border px-1.25 ">#</span> Channels
          <ul>
            {users[user].organizations.map((channel) => (
              <Channel
                channelName={channel.name}
                key={channel.id}
                id={channel.id}
              />
            ))}
          </ul>
        </li>

        <li className="py-3">
          <span className="flex items-center gap-1">
            <MessagesCircle />
            Direct Messages
          </span>

          <p
            onClick={() => {
              setSelectedFriendInfo({
                id: userInfo.id,
                name: userInfo.name,
                profilePic: userInfo.profilePic,
                email: userInfo.email,
              });
              setCurConvoId(0);
              setCurConvo("dms");
            }}
            className={`flex items-center px-2 py-0.5 gap-2 ${selectedFriendInfo.id === 0 ? "bg-[#8f3694] font-semibold rounded-sm" : ""} cursor-pointer`}
          >
            <span className="rounded-sm bg-[#8a708c94] ">
              {userInfo.profilePic ? (
                <img
                  src={userInfo.profilePic}
                  alt=""
                  className="size-4 rounded-md"
                />
              ) : (
                <User className="p-1" />
              )}
            </span>
            {"Fawaz Abdulsalam"}
            <span className="text-[#9a95959e]">you</span>
          </p>

          <ul className="flex flex-col gap-1">
            {users[user].dms.map((friend, index) => (
              <Dms
                key={index}
                name={friend.name}
                id={friend.id}
                src={friend.profilePic}
              />
            ))}
          </ul>
        </li>

        <li>
          Agents & Apps
          <p className="ml-4 flex items-center gap-2">
            <img src="slack_logo.png" alt="slack_logo" className="size-4" />
            Slack
          </p>
        </li>
      </ul>
    </div>
  );
}
