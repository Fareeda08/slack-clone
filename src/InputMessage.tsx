import {
  SmileIcon,
  AtSign,
  Video,
  Mic,
  SquareSlash,
  SendHorizontal,
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
  ChevronDown,
  Plus,
} from "lucide-react";
import { useFrContext } from "./Context";

export default function InputMessage({ location }: { location?: string }) {
  const { selectedFriendInfo } = useFrContext();
  return (
    <div className="m-6 p-2 border-2 border-[#d8d3d33b] rounded-md bg-[#1a1a1a57] h-auto">
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
      <textarea
        id="sendMsg"
        placeholder={`${location === "thread" ? "Reply..." : `Message ${selectedFriendInfo.name}`}`}
        className="w-full resize-none"
      />

      {location === "thread" && (
        <div className="flex items-center gap-2 text-amber-50/60">
          <label className="relative">
            <input type="checkbox" className="peer sr-only" />

            <span
              className="block size-4 rounded border border-gray-500 bg-transparent
      peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:after:absolute
      peer-checked:after:left-1.5  peer-checked:after:top-[0.5] peer-checked:after:h-2.5
      peer-checked:after:w-1.5 peer-checked:after:rotate-45 peer-checked:after:border-b-2
      peer-checked:after:border-r-2  peer-checked:after:border-white
    "
            />
          </label>
          Also send as direct message
        </div>
      )}

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
