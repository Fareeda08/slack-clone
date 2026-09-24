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
  SendHorizontal,
  Image,
  Italic,
  Strikethrough,
  Underline,
  Bold,
  Link,
  ListOrdered,
  List,
  TextQuote,
  CodeXml,
  SquareTerminal,
} from "lucide-react";
import {type ReactNode } from "react";

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
    <div className="flex items-center justify-between p-1">
      <form className="w-[80%] flex items-center relative">
      <SearchIcon size={16} className="left-2 text-[#ffffffab] absolute" />
        <input
          className={`w-full pt-[1px] pl-7 pr-2 pb-1 bg-[#78567b] rounded-sm text-white font-semibold`}
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
      <div className="flex items-center p-2 px-4 justify-between">
        <div className="flex items-center gap-3">
          <Star />
          <p className="font-bold">{channelName || "#askorganizer"}</p>
          <p className=" text-[#ffffff80]">Ask anything from the organizers!</p>
        </div>
        <div className="flex items-center gap-2 text-[#ffffff80]">
          <Image />
          <p className="mr-2">2.276</p>
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
          <MessageCircle className="w-[16px]" />
          Messages
        </li>
        <li className="flex gap-1  items-center pb-3 px-2.5">
          <FilePlusCorner />
          Add Canvas
        </li>
        <li className="flex gap-1 items-center pb-3 px-2.5">
          <Files />
          Files and Links
        </li>
        <li className="flex gap-1  items-center pb-3 px-2.5">
          <Pin /> Pins
        </li>
        <li className="pb-2 flex">
          <Plus />
          {/* <span className="p-1 bg-blue rounded-full">.</span>*/}
        </li>
      </ul>
    </nav>
  );
}

function ChatInfo() {
  return (
    <div className="pl-4 pr-4">
      <h2 className="text-2xl my-2">
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
        <button className="flex gap-1 items-center px-2 py-1 border-2 border-[#d8d3d33b] rounded-md">
          <UserStar /> Add People to Channel
        </button>
        <button className="flex gap-1 items-center px-2 py-1 border-2 border-[#d8d3d33b] rounded-md">
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
      <div className="flex pb-3  text-[#9a979794] divide-x-2 text-[15px]">
        <div className="flex gap-3 pr-3 items-center">
          <Bold /> <Italic />
          <Underline />
          <Strikethrough />
        </div>
        <div className="flex gap-3 px-3">
          <Link /> <ListOrdered /> <List />
        </div>
        <div className="flex gap-3 pl-3">
          <TextQuote /> <CodeXml /> <SquareTerminal />
        </div>
      </div>
      <input
        type="text"
        placeholder={`Message ${channelName || "#askorganizer"}`}
      />
      <div className="flex justify-between pt-3 text-[#b8b3b3db] items-center">
        <div className="flex divide-x gap-3 divide-[#3b3b3bb3] items-center">
          <span className="flex gap-3 pr-2 items-center">
            <Plus className="p-[0.5px] bg-[#706c6c40] rounded-full" />
            <p className="underline text-[15px]">Aa</p>
            <SmileIcon />
            <AtSign />
          </span>
          <span className="flex gap-4 pr-1 items-center border-red">
            <Video />
            <Mic />
          </span>
          <SquareSlash />
        </div>
        <div className="flex divide-x-2 divide-[#3b3b3bb3] items-center gap-2">
          <SendHorizontal className="pr-2" />
          <ChevronDown className="text-[#4a4949f7]" />
        </div>
      </div>
    </div>
  );
}
