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

//bg-linear-to-r from-cyan-500 to-blue-500"

export default function Menu() {
  return (
    <ul className="menu p-3 flex flex-col items-center gap-7 justify-between">
      <ul className="flex flex-col items-center gap-7 text-xs w-min pt-7">
        <img
          className="w-8 border border-[#8a708c94] bg-[#2a082c] rounded-md p-2"
          src="yellow map.webp"
          alt="eu_logo"
        />
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
      {children}
      {menu && <p className="text-center">{menu}</p>}
    </li>
  );
}
