import {
  Bookmark,
  EllipsisVertical,
  FaceSlightlySmilingPlus,
  Forward,
  MessageCircleMore,
  User,
} from "lucide-react";

import { conversations } from "../public/data/conversations";
import { useFrContext } from "./Context";
import { type ReactNode } from "react";
import { users } from "../public/data/users";

type MessageType = { message: string; id: number; createdAt: string };

export default function ChatSpace({
  user = "user1",
  onView,
}: {
  user?: keyof typeof conversations;
  onView: () => void;
}) {
  const { selectedInfo, curConvoId, curConvo: convo } = useFrContext();

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
            name={selectedInfo?.name}
            profilePic={selectedInfo?.profilePic}
            viewUserProfile={onView}
          />
        )}

        {messages?.map(function (message) {
          if (convo === "dms") {
            return (
              <MessageCompositionDM
                selectedInfo={selectedInfo}
                key={message.id}
                mes={message}
                name={selectedInfo?.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

function MessageCompositionDM({
  selectedInfo,
  mes,
  name,
}: {
  selectedInfo: { name: string; id: number; profilePic?: string };
  mes: MessageType;
  name: string;
}) {
  const time = new Date(mes.createdAt).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="group/message relative flex gap-6 bg-[#36193c63] p-1 pl-4">
      <img
        className="size-12.5 rounded-full"
        src={selectedInfo?.profilePic}
        alt="profile_picture"
      />

      <div className="flex-1 min-w-0 pr-64">
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
      <div className="absolute -top-5 right-7 hidden group-hover/message:flex gap-5 items-center border border-[#36193ca8] rounded-md p-1.5 bg-[#36193c36]">
        <Action info="Add reaction">
          <FaceSlightlySmilingPlus />
        </Action>

        <Action info="Reply in thread">
          <MessageCircleMore />
        </Action>

        <Action info="Forward message...">
          <Forward />
        </Action>

        <Action info="Save for later">
          <Bookmark />
        </Action>

        <Action info="More actions">
          <EllipsisVertical />
        </Action>
      </div>
    </div>
  );
}

function Action({ info, children }: { info: string; children: ReactNode }) {
  return (
    <div className="group/action relative">
      <span className="absolute -left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 transition-opacity group-hover/action:opacity-100 whitespace-nowrap border border-zinc-800 rounded-md p-1.5">
        {info}
      </span>
      <button className="transition-[stroke-width] duration-150 group-hover/action:[&>svg]:stroke-3">
        {children}
      </button>
    </div>
  );
}

function UserIntro({
  profilePic,
  name,
  viewUserProfile,
}: {
  profilePic?: string;
  name: string;
  viewUserProfile: () => void;
}) {
  const userInfo = users.user1;

  return (
    <div className="flex gap-4 flex-col pt-10 pl-4">
      <div className="flex gap-4 items-center">
        {profilePic || userInfo.profilePic ? (
          <img
            src={profilePic || userInfo.profilePic}
            alt="profile_picture"
            className="size-30"
          />
        ) : (
          <User />
        )}
        <p className="font-semibold">{name || userInfo.name}</p>
      </div>

      <p>
        This message is just between {<span className="text-sky-600 bg-sky-700/20">@{name || userInfo.name}</span>} and you. Check out their profile to learn more about them
      </p>

      <button
        onClick={() => {
          viewUserProfile();
          console.log("clicked");
        }}
        className="w-fit bg-[#36193c63] p-2 border border-fuchsia-900 rounded-md"
      >
        View profile
      </button>
    </div>
  );
}

function formatMessage(text: string) {
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
