import {
  Bell,
  ChevronDown,
  EllipsisVertical,
  FilePlusCorner,
  Files,
  Headphones,
  MessageCircle,
  SearchIcon,
  Star,
  Pin,
  Plus,
  Image,
  Check,
} from "lucide-react";

import { useFrContext } from "./Context";
import { users } from "../public/data/users";

export default function Nav() {
  const { selectedInfo, curConvo: convo } = useFrContext();

  const userInfo = users.user1

  return (
    <nav>
      <div className="flex items-center p-2 px-4 justify-between">
        <div className="flex items-center gap-3">
          <Star />

          {convo === "organizations" ? (
            <p className="font-bold">{selectedInfo.name}</p>
          ) : convo === "dms" && selectedInfo.id === 0 ? (
            <FriendMiniscle
              name={userInfo?.name}
              profilePic={userInfo?.profilePic}
            />
          ) : (
            <FriendMiniscle
              name={selectedInfo?.name}
              profilePic={selectedInfo?.profilePic}
            />
          )}

          {convo === "organizations" && (
            <p className=" text-[#ffffff80]">
              Ask anything from the organizers!
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 text-[#ffffff80]">
          {convo === "organizations" && (
            <>
              <Image />
              <p className="mr-2">2.276</p>
            </>
          )}
          <span className="flex">
            <Headphones />
            <ChevronDown />
          </span>

          <Bell />
          <SearchIcon />
          <EllipsisVertical />
        </div>
      </div>
      <ul className="flex pl-3 pr-4 items-center  border-b border-[#9a959557]">
        <li className="flex gap-1 items-center border-b pb-3 pl-1">
          <MessageCircle className="w-4" />
          Messages
        </li>
        <li className="flex gap-1  items-center pb-3 px-2.5">
          <FilePlusCorner />
          Add Canvas
        </li>
        {convo === "organizations" && (
          <>
            {" "}
            <li className="flex gap-1 items-center pb-3 px-2.5">
              <Files />
              Files and Links
            </li>
            <li className="flex gap-1  items-center pb-3 px-2.5">
              <Pin /> Pins
            </li>
          </>
        )}

        <li className="pb-2 flex">
          <Plus />
        </li>
      </ul>
    </nav>
  );
}

function FriendMiniscle({
  name,
  profilePic,
}: {
  name: string;
  profilePic?: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={profilePic} alt="" className="rounded-full size-8" />
      <p>{name}</p>
      <span className="p-0.1 bg-purple-800 rounded-full flex w-fit">
        <Check />
      </span>
    </div>
  );
}
