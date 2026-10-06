/* eslint-disable react-refresh/only-export-components */
import {
  Bookmark,
  ChevronDown,
  EllipsisVertical,
  FaceSlightlySmilingPlus,
  Forward,
  MessageCircleMore,
} from "lucide-react";

import { conversations } from "../public/data/conversations";
import { useFrContext } from "./Context";
import { useEffect, useRef, useState, type ReactNode } from "react";
import UserIntro from "./UserIntro";
import MoreActions from "./MoreActions";

type MessageType = { message: string; id: number; createdAt: string };

export default function ChatSpace({
  user = "user1",
  onViewThread,
  onViewProfile,
}: {
  user?: keyof typeof conversations;
  onViewThread: () => void;
  onViewProfile: () => void;
}) {
  const { selectedFriendInfo, curConvoId, curConvo: convo } = useFrContext();

  const messages =
    curConvoId !== null
      ? conversations[user]?.[convo]?.[String(curConvoId)]
      : undefined;

  if (curConvoId === null) return <div className="h-auto"></div>;

  return (
    <div className="flex flex-1 min-h-0 min-w-0 ">
      <div className="flex flex-col flex-1 gap-7 overflow-y-auto min-h-0 min-w-0 messages overflow-x-hidden">
        {convo === "dms" && (
          <UserIntro
            name={selectedFriendInfo?.name}
            profilePic={selectedFriendInfo?.profilePic}
            viewUserProfile={onViewProfile}
          />
        )}

        {messages?.map((message, index) => {
          const currentDate = new Date(message.createdAt);

          const previousDate =
            index > 0 ? new Date(messages[index - 1].createdAt) : null;

          const showDate =
            index === 0 ||
            currentDate.toDateString() !== previousDate?.toDateString();

          if (convo === "dms") {
            return (
              <MessageCompositionDM
                key={message.id}
                selectedFriendInfo={selectedFriendInfo}
                mes={message}
                name={selectedFriendInfo.name}
                onViewThread={onViewThread}
                showDate={showDate}
              />
            );
          }
        })}

       
      </div>
    </div>
  );
}

function MessageCompositionDM({
  selectedFriendInfo,
  mes,
  name,
  onViewThread,
  showDate,
}: {
  selectedFriendInfo: { name: string; id: number; profilePic?: string };
  mes: MessageType;
  name: string;
  onViewThread: () => void;
  showDate: boolean;
}) {
  const time = new Date(mes.createdAt).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const [viewMoreActions, setViewMoreActions] = useState(false);

  const messageRef = useRef<HTMLDivElement>(null);

  function handleViewMoreActions() {
    setViewMoreActions(!viewMoreActions);
  }

  useEffect(() => {
    if (!viewMoreActions || !messageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setViewMoreActions(false);
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(messageRef.current);

    return () => observer.disconnect();
  }, [viewMoreActions]);

  const day = new Date(mes.createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const date = mes && new Date(mes.createdAt).getDate();

  const dateSuffix =
    day &&
    (date % 10 === 1 && date !== 11
      ? "st"
      : date % 10 === 2 && date !== 12
        ? "nd"
        : date % 10 === 3 && date !== 13
          ? "rd"
          : "th");

  return (
    <div>
      {showDate && (
        <div className="flex items-center justify-center w-full mb-10">
          <hr />
          <div className="flex items-center justify-center py-1.5 px-4 border border-fuchsia-900/40 rounded-4xl">
            <p className="text-center">
              {day}
              {dateSuffix}
            </p>
            <ChevronDown />
          </div>
          <hr />
        </div>
      )}

      <div
        ref={messageRef}
        className="group/message relative flex gap-6 bg-[#36193c63] p-1 pl-4"
      >
        <img
          className="size-12.5 rounded-full"
          src={selectedFriendInfo?.profilePic}
          alt="profile_picture"
        />

        <div className="flex-1 min-w-0 pr-2">
          {/* Name + time */}
          <div className="flex gap-1 items-center">
            <p className="font-bold">{name}</p>
            <p>{time}</p>
          </div>

          {/* Message */}
          {mes.message?.split("\n").map((line, index) => (
            <p key={index} className="py-1">
              {formatMessage(line)}
            </p>
          ))}
        </div>

        {/* Actions */}
        <div
          className={`absolute -top-5 right-7 flex  gap-5 items-center border border-[#36193ca8] rounded-md p-1.5 bg-[#36193c36] ${
            viewMoreActions ? "flex" : "hidden group-hover/message:flex"
          }`}
        >
          <Action info="Add reaction" id={mes.id}>
            <FaceSlightlySmilingPlus />
          </Action>

          <Action info="Reply in thread" handleClick={onViewThread} id={mes.id}>
            <MessageCircleMore />
          </Action>

          <Action info="Forward message..." id={mes.id}>
            <Forward />
          </Action>

          <Action info="Save for later" id={mes.id}>
            <Bookmark />
          </Action>

          <div className="relative">
            <Action
              info="More actions"
              handleClick={handleViewMoreActions}
              viewMoreActions={viewMoreActions}
              id={mes.id}
            >
              <EllipsisVertical />
            </Action>

            {viewMoreActions && <MoreActions onClick={setViewMoreActions} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Action({
  info,
  children,
  handleClick,
  id,
  viewMoreActions,
}: {
  info: string;
  children: ReactNode;
  handleClick?: () => void;
  id: number;
  viewMoreActions?: boolean;
}) {
  const { setSelectedMessageID } = useFrContext();

  const moreActionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewMoreActions) return;

    function handleClickOutside(event: PointerEvent) {
      if (
        moreActionsRef.current &&
        !moreActionsRef.current.contains(event.target as Node)
      ) {
        handleClick?.();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [viewMoreActions, handleClick]);

  return (
    <div ref={moreActionsRef} className="relative w-fit">
      <button
        onClick={() => {
          setSelectedMessageID(id);
          handleClick?.();
        }}
        className="peer transition-[stroke-width] duration-150 hover:[&>svg]:stroke-3"
      >
        {children}
      </button>

      <span className="pointer-events-none absolute -left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 whitespace-nowrap border border-zinc-800 rounded-md p-1.5 transition-opacity peer-hover:opacity-100">
        {info}
      </span>
    </div>
  );
}
export function formatMessage(text: string) {
  return text.split(/(@\S+|https?:\/\/\S+)/g).map((part, index) => {
    if (part.startsWith("@")) {
      return (
        <span key={index} className="text-yellow-400">
          {part}
        </span>
      );
    }

    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
