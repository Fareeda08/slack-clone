import {
  BellOff,
  ChevronRight,
  ClockPlus,
  MessageSquareDot,
  Link,
  Type,
  Pin,
} from "lucide-react";
import { useState, type ReactNode } from "react";

export default function MoreActions({
  onClick: viewMoreActions,
}: {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className=" absolute right-full -bottom-55 mr-2 z-50 min-w-70 bg-[#36193c] rounded-sm border border-[#36193c80] group/more">
      <div>
        <List
          logo={<MessageSquareDot />}
          action="Mark unread"
          viewMoreActions={viewMoreActions}
        />
        <List
          logo={<ClockPlus />}
          action="Remind me"
          actionLogos={<ChevronRight />}
          viewMoreActions={viewMoreActions}
        />
        <p
          onClick={() => viewMoreActions(false)}
          onMouseEnter={() => setActive1(true)}
          onMouseLeave={() => setActive1(false)}
          className={`flex items-center gap-2 ${active1 && "bg-cyan-700"} my-2 py-0.5 px-5 cursor-pointer`}
        >
          <BellOff /> Turn off notification for replies
        </p>
      </div>
      <div className="border-b border-t border-gray-700">
        <List
          logo={<Link />}
          action="Copy link"
          viewMoreActions={viewMoreActions}
        />
        <List
          logo={<Type />}
          action="Copy message"
          viewMoreActions={viewMoreActions}
        />
      </div>
      <List
        logo={<Pin />}
        action="Pin to this conversation"
        viewMoreActions={viewMoreActions}
      />
      <p
        onClick={() => viewMoreActions(false)}
        onMouseEnter={() => setActive2(true)}
        onMouseLeave={() => setActive2(false)}
        className={`flex items-center justify-between ${active2 && "bg-cyan-700 "} my-2 py-0.5 px-5 border-t border-gray-700 cursor-pointer`}
      >
        Connect to apps <ChevronRight />
      </p>
    </div>
  );
}

function List({
  logo,
  actionLogos,
  action,
  viewMoreActions,
}: {
  logo: ReactNode;
  actionLogos?: ReactNode;
  action: string;
  viewMoreActions: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => viewMoreActions(false)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`flex items-center justify-between my-2 py-0.5 px-5 ${active && "bg-cyan-700"} cursor-pointer`}
    >
      <div className="flex items-center gap-2">
        {logo}
        <p>{action}</p>
      </div>
      {actionLogos}
    </div>
  );
}
