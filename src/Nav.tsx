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
  Image
} from "lucide-react";

export default function Nav({ channelName }: { channelName?: string }) {
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

