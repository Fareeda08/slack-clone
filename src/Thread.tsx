import { conversations } from "../public/data/conversations";
import { formatMessage } from "./ChatSpace";
import { EllipsisVertical, Hash, X } from "lucide-react";
import { useFrContext } from "./Context";
import InputMessage from "./InputMessage";
import { useEffect, useState } from "react";
import { Action } from "./ChatSpace";

import {
  Bookmark,
  FaceSlightlySmilingPlus,
  Forward,
} from "lucide-react";

export default function Thread({
  handleClick: viewThread,
}: {
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [clipText, setClipText] = useState(false);
  const [highlight, setHighLight] = useState(true);

  const { selectedFriendInfo, selectedMessageID } = useFrContext();
  const mes = conversations["user1"]["dms"][selectedFriendInfo.id].find(
    (message) => message.id === selectedMessageID,
  );

  useEffect(function () {
    const timer = setTimeout(() => setHighLight(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  const date =
    mes &&
    new Date(mes.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  const day = mes && new Date(mes.createdAt).getDate();

  const dateSuffix =
    day &&
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th");

  const time =
    mes &&
    new Date(mes.createdAt).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <div className="w-2/5 border-l border-fuchsia-950">
      <div className="flex justify-between p-4">
        <p className="font-bold text-lg">Thread</p>
        <button></button>
        <div className="flex items-center gap-5">
          <EllipsisVertical />
          <X onClick={() => viewThread(false)} />
        </div>
      </div>

      <div className="relative flex gap-3 p-3 hover:bg-fuchsia-950/30 group/thread">
        {/* Temporary highlight */}
        <div
          className={`absolute inset-0 pointer-events-none bg-amber-800/50 transition-opacity duration-3000 ${
            highlight ? "opacity-100" : "opacity-0"
          }`}
        />

        <img
          className="relative z-10 size-10.5 rounded-full"
          src={selectedFriendInfo.profilePic}
          alt="profile_picture"
        />

        <div className="relative z-10">
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex gap-1 items-center">
              <p className="font-bold">{selectedFriendInfo.name}</p>
              <p>
                {date}
                {dateSuffix} at {time}
              </p>
            </div>
          </div>

          {/* Message */}
          <div>
            <div>
              <div>
                {mes?.message !== undefined &&
                mes?.message.length > 60 &&
                !clipText
                  ? mes?.message
                      ?.slice(0, 350)
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} className="py-1">
                          {formatMessage(line)}
                        </p>
                      ))
                  : mes?.message?.split("\n").map((line, index) => (
                      <p key={index} className="py-1">
                        {formatMessage(line)}
                      </p>
                    ))}
              </div>
              <p
                onClick={() => setClipText((prev) => !prev)}
                className="text-sky-600 cursor-pointer"
              >
                {!clipText ? "Show more..." : "Show Less..."}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-9 flex  gap-5 items-center border border-gray-400/20 rounded-md p-1.5 bg-[#36193c36] opacity-0 group-hover/thread:opacity-100">
          <Action info="Add reaction" id={selectedMessageID!}>
            <FaceSlightlySmilingPlus />
          </Action>

          <Action info="Open thread in DM" id={selectedMessageID!}>
            <Hash />
          </Action>

          <Action info="Forward message..." id={selectedMessageID!}>
            <Forward />
          </Action>

          <Action info="Save for later" id={selectedMessageID!}>
            <Bookmark />
          </Action>

          <Action info="More actions" id={selectedMessageID!}>
            <EllipsisVertical />
          </Action>
        </div>
      </div>
      <InputMessage location="thread" />
    </div>
  );
}
