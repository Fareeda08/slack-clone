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

export default function ConvoLog() {
  return (
    <div className="bg-[#4a0b4e] w-full">
      <Nav />

      <div className="border border-[#d8d3d31f] rounded-tl-lg h-full">
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

function Chats({ user }: { user?: string }) {
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
          <span className="rounded-sm border px-[5px] ">#</span> Channels
          <ul>
            <Channel channelName="904 dufma" />
            <Channel active={true} channelName="askorganizer" />
            <Channel channelName="general" />
            <Channel channelName="random" />
            <Channel channelName="talkaboutyouridea" />
          </ul>
        </li>

        <li className="py-3">
          <span className="flex items-center gap-1">
            <MessagesCircle />
            Direct Messages
          </span>

          <p className="ml-2 flex items-center p-2 gap-2">
            <span className="rounded-sm bg-[#8a708c94] ">
              <User className="p-1" />
            </span>
            {user || "Fawaz Abdulsalam"}{" "}
            <span className="text-[#9a95959e]">you</span>
          </p>
        </li>

        <li>
          Agents & Apps
          <p className="ml-4 flex items-center gap-2">
            <img src="slack_logo.png" alt="slack_logo" className="size-4"/>
            
            Slack
          </p>
        </li>
      </ul>
    </div>
  );
}

type channelType = {
  channelName: string;
  active?: boolean;
};

function Channel({ channelName, active }: channelType) {
  return (
    <li
      className={`pl-4 p-[1px] ${active && "bg-[#8f3694] rounded-sm font-semibold"}`}
    >
      # {channelName}
    </li>
  );
}
