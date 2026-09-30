import { User } from "lucide-react";
import { users } from "../public/data/users";
import { conversations } from "../public/data/conversations";
import { useFrContext } from "./Context";

export default function ChatSpace({
  user = "user1",
  convo = "dms",
}: {
  user?: string;
  convo?: string;
}) {
  const { curFrId } = useFrContext();

  const curUser = users[user].friends.filter(
    (friend) => friend.id === curFrId,
  )[0];

  console.log(curUser);

  if (curFrId === null) return <div className="h-auto"></div>;

  const messages = conversations[user]?.map((con) => con[convo]);

  return (
    <div className="flex flex-col flex-1 gap-7 overflow-y-auto h-auto messages">
      <UserIntro name={curUser.name} profilePic={curUser.profilePic} />
      {messages[0].map((message, id) => {
        return (
          <MessageComposition
            curUser={curUser}
            key={id}
            mes={message}
            name={curUser.name}
          />
        );
      })}
    </div>
  );
}

function MessageComposition({
  curUser,
  mes,
  name,
}: {
  curUser: { name: string; id: number; profilePic: string };
  mes: { message: string; id: number; createdAt: string };
  name: string;
}) {
  const time = new Date(mes.createdAt).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="flex gap-6">
      <img
        className="size-12.5 rounded-full"
        src={curUser.profilePic}
        alt="profile_picture"
      />

      <div>
        <div className="flex gap-1">
          <p className="font-bold">{name}</p>
          <p>{time}</p>
        </div>

        {mes.message?.split("\n").map((line, index) => (
          <p key={index} className="py-1">
            {formatMessage(line)}
          </p>
        ))}
      </div>
    </div>
  );
}

function UserIntro({
  profilePic,
  name,
}: {
  profilePic?: string;
  name: string;
}) {
  return (
    <div className="flex gap-4 flex-col pt-10">
      <div className="flex gap-4 items-center">
        {profilePic ? (
          <img src={profilePic} alt="profile_picture" className="size-30" />
        ) : (
          <User />
        )}
        <p className="font-semibold">{name}</p>
      </div>

      <p>
        {formatMessage(`This message is just between @${name} and you. Check out their profile to learn more about them`)}
      </p>
      <button className="w-fit">View profile</button>
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