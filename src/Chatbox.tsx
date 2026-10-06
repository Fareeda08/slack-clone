import Search from "./Search";
import ChatSpace from "./ChatSpace";
import InputMessage from "./InputMessage";
import ChatInfo from "./ChatInfo";
import Nav from "./Nav";
import Profile from "./Profile";

import { useFrContext } from "./Context";
import { useState } from "react";
import Thread from "./Thread";

export default function Chatbox() {
  const { curConvo: convo } = useFrContext();

  const [viewProfile, setViewProfile] = useState(false);
  const [viewThread, setViewThread] = useState(false);

  function handleViewProfile() {
    setViewProfile((prev) => !prev);
  }

  function handleViewThread() {
    setViewThread((prev) => !prev);
  }

  return (
    <div className="bg-[#251129] flex flex-col flex-1 h-full min-h-0 min-w-0">
      <Search />

      <div className="flex flex-1 min-h-0 min-w-0">
        <div className="flex flex-col flex-1 min-h-0 min-w-0 overflow-clip">
          <Nav />
          <ChatSpace
            onViewProfile={handleViewProfile}
            onViewThread={handleViewThread}
          />
          {convo === "organizations" && <ChatInfo />}
          <InputMessage />
        </div>

        {viewProfile && convo === "dms" && (
          <Profile closeProfile={handleViewProfile} />
        )}

        {viewThread && <Thread handleClick={setViewThread}/>}
      </div>
    </div>
  );
}
