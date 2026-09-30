import { SearchIcon, CircleQuestionMark } from "lucide-react";

export default function Search() {
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
