import {
  ListCollapse,
  Clock,
  ArrowLeft,
  ArrowRight,
  FaceSlightlySmiling,
  X,
  ChevronRight,
  Settings,
  FilePenLine,
} from "lucide-react";

import Chats from "./Chats";

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
