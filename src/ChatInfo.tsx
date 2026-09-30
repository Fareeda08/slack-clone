import { FilesIcon, UserStar } from "lucide-react";

export default function ChatInfo() {
  return (
    <div className="pl-4 pr-4 ">
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
    </div>
  );
}
