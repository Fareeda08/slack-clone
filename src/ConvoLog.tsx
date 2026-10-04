import {
  ListCollapse,
  Clock,
  Rocket,
  Headphones,
  SquareUser,
  Star,
  ArrowLeft,
  ArrowRight,
  FaceSlightlySmiling,
  X,
  ChevronRight,
  Settings,
  FilePenLine,
  User,
  TextSearch,
  MessagesCircle,
} from "lucide-react";
import { users } from "../public/data/users";
import { useFrContext } from "./Context";

export default function ConvoLog() {
  return (
    <div className="bg-[#4a0b4e] w-full">
      <Nav />

      <div className="border border-[#6b34341f] rounded-tl-lg h-full">
        <Welcome />
        <Chats />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="nav flex items-center justify-between px-3 py-2">
      <ListCollapse />

      <div className="flex items-center gap-3">
        <ArrowLeft />
        <ArrowRight className="text-[#9a9797ed]" />
        <Clock />
      </div>
    </div>
  );
}

function Welcome() {
  return (
    <>
      <div className="flex items-center justify-between px-3 py-2 bg-[#2a082c] rounded-tl-lg">
        <select className="font-bold">
          <option value="host">euafricathejourney</option>
        </select>

        <div className="flex items-center gap-3">
          <Settings />
          <FilePenLine />
        </div>
      </div>
      <div className="px-3 py-2">
        <p className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2 font-bold">
            <FaceSlightlySmiling />
            Welcome back
          </span>
          <X className="text-[#9a9797ed]" />
        </p>

        <div className="flex items-center justify-between bg-[#f9e3fff5] px-3 py-2 w-[98%] rounded-md text-black">
          <p className="font-bold">Top things to check out </p>
          <ChevronRight />
        </div>
      </div>
    </>
  );
}

function Chats({ user = "user1" }: { user?: string }) {
  const { selectedInfo, setSelectedInfo, setCurConvoId } = useFrContext();

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
              setSelectedInfo({
                id: userInfo.id,
                name: userInfo.name,
                profilePic: userInfo.profilePic,
                email:userInfo.email
              });
              setCurConvoId(0);
            }}
            className={`flex items-center px-2 py-0.5 gap-2 ${selectedInfo.id === 0 ? "bg-[#8f3694] font-semibold rounded-sm" : ""} cursor-pointer`}
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

type channelType = {
  channelName: string;
  id: number;
};

function Channel({ channelName, id }: channelType) {
  const { setCurConvo, setCurConvoId, setSelectedInfo, selectedInfo } =
    useFrContext();

  return (
    <li
      onClick={() => {
        setCurConvo("organizations");
        setCurConvoId(id);

        const curInfo = users["user1"]?.["organizations"].find(
          (convo) => convo.id === id,
        );

        if (curInfo) {
          setSelectedInfo(curInfo);
        }
      }}
      className={`pl-4 p-px ${selectedInfo.id === id && "bg-[#8f3694] font-semibold p-1 rounded-sm "} cursor-pointer`}
    >
      # {channelName}
    </li>
  );
}

function Dms({ name, id, src }: { name: string; id: number; src: string }) {
  const { setCurConvoId, setCurConvo, setSelectedInfo, selectedInfo } =
    useFrContext();
  return (
    <li
      onClick={() => {
        setCurConvo("dms");
        setCurConvoId(id);

        const curInfo = users["user1"]?.["dms"].find(
          (convo) => convo.id === id,
        );

        if (curInfo) {
          setSelectedInfo(curInfo);
        }
      }}
      className={`pl-2 p-px ${selectedInfo.id === id && "bg-[#8f3694] font-semibold p-1 rounded-sm"} cursor-pointer flex items-center gap-2`}
    >
      {src ? <img src={src} alt="" className="size-5 rounded-md" /> : <User />}
      {name}
    </li>
  );
}
