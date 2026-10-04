import { FilesIcon, UserStar } from "lucide-react";
import { useFrContext } from "./Context";

export default function ChatInfo() {
  const { selectedInfo } = useFrContext();
  
  return (
    <div className="pl-5 pr-4 ">
      <h2 className="text-2xl my-2">
        # <strong>{selectedInfo.name}</strong>
      </h2>
      <p className="text-base">
        <a href="mari" className="bg-[#91c0f736] text-[#0276b2]">
          @Mari Hanikat-Garage48
        </a>{" "}
        created this channel on November 22nd, 2020. This is the beginning of
        the <strong># {selectedInfo.name}</strong> channel. For all participants to ask
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
