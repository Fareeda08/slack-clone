import type { ReactNode } from "react";
import {
  House,
  MessageSquare,
  Bell,
  SquareBottomDashedScissors,
  Files,
  Plus,
  Moon,User
} from "lucide-react";

export default function Menu() {
  return (
    <ul className="menu p-4 flex flex-col items-center gap-7 justify-between">
      <ul className="flex flex-col items-center gap-7 text-xs w-min">
        <List menu="Home">
          <House />
        </List>
        <List menu="DMs">
          <MessageSquare />
        </List>
        <List menu="Activity">
          <Bell />
        </List>
        <List menu="Files">
          <Files />
        </List>
        <List menu="Agents & Tools">
          <SquareBottomDashedScissors />
        </List>
      </ul>

      <ul className="flex flex-col items-center gap-7">
        <li className="p-2 rounded-full bg-[#8a708c94]">
          <Plus />
        </li>
        <li className="p-2 rounded-full bg-[#8a708c94]">
          <Moon />
        </li>
        <li className="p-2 rounded-lg bg-[#8a708c94]">
          <User />
        </li>
      </ul>
    </ul>
  );
}

type ListProps = {
  children: ReactNode;
  menu?: string;
};

function List({ children, menu }: ListProps) {
  return (
    <li className="flex flex-col items-center ">
      <div className="menu-img">{children}</div>
      {menu && <p className="text-center">{menu}</p>}
    </li>
  );
}
