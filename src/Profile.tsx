import {
  Check,
  Clock,
  EllipsisVertical,
  X,
  MessageCircle,
  Headphones,
  Mail,
  ChevronDown,
} from "lucide-react";
import { users } from "../public/data/users";
import { useFrContext } from "./Context";

export default function Profile({
  
  closeProfile,
}: {
 
  closeProfile: () => void;
  }) {
  const userInfo = users.user1;
  const { selectedInfo } = useFrContext();

  return (
    <div className="p-2 w-1/3 border-l border-fuchsia-950">
      <div className="flex justify-between pb-3">
        <p className="font-bold text-lg">Profile</p>
        <X onClick={closeProfile} />
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <img
          src={selectedInfo.profilePic || userInfo.profilePic}
          alt="profile_picture"
          className="h-55 w-53 self-center"
        />

        <h2 className="font-bold text-xl">
          {selectedInfo.name || userInfo.name}
        </h2>
        <p className="flex gap-2 items-center">
          <span className="p-1 flex w-fit bg-green-600 rounded-full" />
          Active
        </p>
        <span className="p-0.5 bg-purple-800 rounded-full flex w-fit">
          <Check /> 
        </span>
        <p className="flex items-center gap-2">
          <Clock /> {selectedInfo.time || "4:05 PM"} local time
        </p>

        <div className="flex items-center gap-2">
          <button className="flex gap-2 border rounded-md w-9/20 px-2 py-1 items-center justify-center">
            <MessageCircle className="w-4" />
            Messages
          </button>
          <button className="flex items-center gap-3 border rounded-md w-9/20 px-2 py-1 justify-center">
            <span className="flex items-center gap-1">
              <Headphones /> Huddle
            </span>
            <ChevronDown />
          </button>
          <button className="px-2 py-1 border rounded-md w-1/10">
            <EllipsisVertical />
          </button>
        </div>
      </div>

      <div className=" my-2 border-t border-b border-zinc-600 py-4 pl-2 px-3">
        <p className="font-bold pb-3">Contact information</p>

        <div className="flex items-center gap-3 ">
          <Mail />

          <p className="flex flex-col">
            <span>Email Address</span>
            <span className="text-sky-600 m-0 p-0">
              {selectedInfo.email || userInfo.email}
            </span>
          </p>
        </div>
      </div>

      <div className=" pl-3">
        <p className="font-bold py-3">Recent DMs</p>

        <p className="flex gap-2 items-center pl-2">
          <img
            src={selectedInfo.profilePic || userInfo.profilePic}
            alt=""
            className="size-5 rounded-full"
          />{" "}
          {selectedInfo.name || userInfo.name}
        </p>
      </div>
    </div>
  );
}
