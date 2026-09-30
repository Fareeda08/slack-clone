import Search from "./Search";
import ChatSpace from "./ChatSpace";
import InputMessage from "./InputMessage";
import ChatInfo from "./ChatInfo";
import Nav from "./Nav";

import { useFrContext } from "./Context";

export default function Chatbox() {
  const { curConvo } = useFrContext();

  return (
    <div className="bg-[#251129] flex flex-col justify-between h-full pl-4">
      <div className="h-auto">
        <Search />
        <Nav />
      </div>

      <ChatSpace />
      <div className="h-auto">
        {curConvo === "og" && <ChatInfo />}
        <InputMessage />
      </div>
    </div>
  );
}
