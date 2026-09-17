import {
  Bell,
  ChevronDown,
  CircleQuestionMark,
  EllipsisVertical,
  FilePlusCorner,
  Files,
  Headphones,
  MessageCircle,
  SearchIcon,
  Star,
  Pin,
  FilesIcon,
  UserStar,
  Plus,
  SmileIcon,
  AtSign,
  Video,
  Mic,
  SquareSlash,
  SendHorizonal,
  SendHorizontal,
} from "lucide-react";
import type { ReactNode } from "react";

export default function Chatbox() {
  return (
    <div className="bg-[#251129] flex flex-col justify-between">
      <div>
        <Search />
        <Nav />
      </div>

      <ChatSpace />

      <ChatInfo />
    </div>
  );
}

function Search() {
  return (
    <div className="flex items-center justify-between py-1">
      <form className="w-[80%]">
        <input
          className="w-full px-2 py-1 bg-[#78567b] rounded-sm text-white font-semibold"
          type="text"
          placeholder="Search eutheafricajourney"
        />
      </form>
      <CircleQuestionMark />
    </div>
  );
}

function Nav({ channelName }: { channelName?: string }) {
  return (
    <nav>
      <div className="flex items-center p-2 justify-between">
        <div className="flex items-center gap-3">
          <Star />
          <p className="font-bold">{channelName || "#askorganizer"}</p>
          <p>Ask anything from the organizers</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex">
            <Headphones />
            <ChevronDown />
          </span>

          <Bell />
          <SearchIcon />
          <EllipsisVertical />
        </div>
      </div>
      <ul className="flex pl-3 pr-4  border-b border-[#9a959557]">
        <li className="flex  items-center border-b pb-3 pl-1">
          <MessageCircle className="w-[16px]" />
          Messages
        </li>
        <li className="flex  items-center pb-3 px-4">
          <FilePlusCorner />
          Add Canvas
        </li>
        <li className="flex items-center pb-3 px-4">
          <Files />
          Files and Links
        </li>
        <li className="flex  items-center pb-3 px-4">
          <Pin /> Pins
        </li>
        <li> + </li>
      </ul>
    </nav>
  );
}

function ChatInfo() {
  return (
    <div className="pl-4 pr-4">
      <h2 className="text-2xl">
        # <strong>askorganizer</strong>
      </h2>
      <p className="text-base">
        <a href="mari" className="bg-[#91c0f736] text-[#0276b2]">
          @Mari Hanikat-Garage48
        </a>{" "}
        created this channel on November 22nd, 2020. This is the beginning of
        the <strong># askorganizer</strong> channel. For all participants to ask
        questions if something is unclear!{" "}
        <span className="text-[#0276b2]">(Edit description)</span>
      </p>

      <div className="flex gap-3 py-2">
        <button className="flex items-center px-2 py-1 border-2 border-[#d8d3d33b] rounded-md">
          <UserStar /> Add People to Channel
        </button>
        <button className="flex items-center px-2 py-1 border-2 border-[#d8d3d33b] rounded-md">
          <FilesIcon /> Pick a template
        </button>
      </div>

      <InputMessage />
    </div>
  );
}

function ChatSpace({ messages }: { messages?: ReactNode }) {
  return <div className="chat-space">{messages || ""}</div>;
}

function InputMessage({ channelName }: { channelName?: string }) {
  return (
    <div className="my-5 p-2 border-2 border-[#d8d3d33b] rounded-md bg-[#1a1a1a57]">
      <div className="flex pb-3  text-[#9a979794] divide-x-2">
        <div>
          <span>B</span> <em>I</em> <span>U</span> <span>S</span>
        </div>
        <div>cool</div>
        <div></div>
      </div>
      <input
        type="text"
        placeholder={`Message ${channelName || "#askorganizer"}`}
      />
      <div className="flex justify-between py-3 text-[#aeaeae] ">
        <div className="flex divide-x-2 gap-3">
          <span className="flex">
            <Plus />
            <p>Aa</p>
            <SmileIcon />
            <AtSign />
          </span>
          <span className="flex">
            <Video />
            <Mic />
          </span>
          <SquareSlash />
        </div>
        <div className="flex divide-x-2">
          <SendHorizontal />
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
