import {
  ListCollapse,
  Clock,
  Rocket,
  Headphones,
  SquareUser,
  Star,
  MoveLeft,
  MoveRight,
  FaceSlightlySmiling,
  X,
  ChevronRight,
  Settings,
  FilePenLine,
  User,
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
        <MoveLeft />
        <MoveRight />
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
          <X />
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
    <div className="chats bg-[#1b0d1e] px-4 py-2 h-full mt-3">
      <button className="flex p-2 rounded-lg border border-[#9a959557] w-full items-center justify-center gap-2 my-2 ">
        <Rocket /> Upgrade Plan
      </button>
      <ul>
        <li className="rounded-md border border-[#9a959557]">
          <input
            className="px-2 py-1"
            type="text"
            placeholder="Find a conversation..."
          />
        </li>

        <ul className="my-3 pb-3 border-b border-[#9a959557] text-[#c2bfbff5]">
          <li className="flex gap-2 items-center my-2">
            <Headphones /> Huddles
          </li>
          <li className="flex gap-2 items-center my-2">
            <SquareUser /> Directories
          </li>
        </ul>

        <li className="mb-5">
          <span className="flex gap-2">
            <Star /> Starred
          </span>
          <p className="ml-4">Drag and drop important stuff here</p>
        </li>
        <li>
          <span className="rounded-sm border px-[5px] ">#</span> Channels
          <ul>
            <Channel channelName="904 dufma" />
            <Channel channelName="askorganizer" />
            <Channel channelName="general" />
            <Channel channelName="random" />
            <Channel channelName="talkaboutyouridea" />
          </ul>
        </li>

        <li className="py-3">
          Direct Messages
          <p className="ml-4 flex items-center p-2 gap-2">
            <span className="p-[0.5px] rounded-sm bg-[#8a708c94]">
              <User />
            </span>
            {user || "Fawaz Abdulsalam"} <span>you</span>
          </p>
        </li>

        <li>
          Agents & Apps
          <p className="ml-4 flex items-center">
            <div className="w-[34px] h-[34px]">
              <svg
                className="w-contain"
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="84"
                stroke="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#fff"
                fill-rule="evenodd"
              >
                <path
                  d="M2 17C2 8.7 8.7 2 17 2h50c8.3 0 15 6.7 15 15v50c0 8.3-6.7 15-15 15H17C8.7 82 2 75.3 2 67z"
                  fill="#1b0d1e"
                />
                <path
                  d="M28 49.8276C28 46.599 30.676 44 34 44s6 2.599 6 5.8276v14.3448C40 67.4008 37.324 70 34 70s-6-2.5992-6-5.8276z"
                  fill="#e01e5a"
                />
                <path
                  d="M49.8275 56C46.599 56 44 53.324 44 50s2.599-6 5.8275-6h14.345C67.401 44 70 46.676 70 50s-2.599 6-5.8275 6z"
                  fill="#ecb22d"
                />
                <path
                  d="M44 19.8275C44 16.599 46.676 14 50 14s6 2.599 6 5.8275v14.345C56 37.401 53.324 40 50 40s-6-2.599-6-5.8276z"
                  fill="#2fb67c"
                />
                <path
                  d="M19.8275 40C16.599 40 14 37.324 14 34s2.599-6 5.8275-6h14.345C37.401 28 40 30.676 40 34s-2.599 6-5.8276 6z"
                  fill="#36c5f1"
                />
                <path
                  d="M44 64c0 3.324 2.676 6 6 6s6-2.676 6-6-2.676-6-6-6h-6z"
                  fill="#ecb22d"
                />
                <path
                  d="M64 40h-6v-6c0-3.324 2.676-6 6-6s6 2.676 6 6-2.676 6-6 6z"
                  fill="#2fb67c"
                />
                <path
                  d="M20 44h6v6c0 3.324-2.676 6-6 6s-6-2.676-6-6 2.676-6 6-6z"
                  fill="#e01e5a"
                />
                <path
                  d="M40 20v6h-6c-3.324 0-6-2.676-6-6s2.676-6 6-6 6 2.676 6 6z"
                  fill="#36c5f1"
                />
              </svg>
            </div>
            Slack
          </p>
        </li>
      </ul>
    </div>
  );
}

type channelType = {
  channelName: string;
};

function Channel({ channelName }: channelType) {
  return <li className="ml-6"># {channelName}</li>;
}
