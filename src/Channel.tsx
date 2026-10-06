import { useFrContext } from "./Context";
import { users } from "../public/data/users";

type channelType = {
  channelName: string;
  id: number;
};

export default function Channel({ channelName, id }: channelType) {
  const { setCurConvo, setCurConvoId, setSelectedFriendInfo, selectedFriendInfo } =
    useFrContext();

  return (
    <li
      onClick={() => {
        setCurConvo("organizations");
        setCurConvoId(id);

        const curInfo = users["user1"]?.["organizations"].find(
          (convo) => convo.id === id,
        );

        if (curInfo) {
          setSelectedFriendInfo(curInfo);
        }
      }}
      className={`pl-4 p-px ${selectedFriendInfo.id === id && "bg-[#8f3694] font-semibold p-1 rounded-sm "} cursor-pointer`}
    >
      # {channelName}
    </li>
  );
}
