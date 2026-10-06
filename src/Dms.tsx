import { users } from "../public/data/users";
import { useFrContext } from "./Context";

import { User } from "lucide-react";

export default function Dms({
  name,
  id,
  src,
}: {
  name: string;
  id: number;
  src: string;
}) {
  const { setCurConvoId, setCurConvo, setSelectedFriendInfo, selectedFriendInfo } =
    useFrContext();
  return (
    <li
      onClick={() => {
        setCurConvo("dms");
        setCurConvoId(id);

        const curInfo = users["user1"]?.["dms"].find(
          (convo) => convo.id === id,
        );

        if (curInfo) {
          setSelectedFriendInfo(curInfo);
        }
      }}
      className={`pl-2 p-px ${selectedFriendInfo.id === id && "bg-[#8f3694] font-semibold p-1 rounded-sm"} cursor-pointer flex items-center gap-2`}
    >
      {src ? <img src={src} alt="" className="size-5 rounded-md" /> : <User />}
      {name}
    </li>
  );
}
