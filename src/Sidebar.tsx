import Menu from "./Menu";
import ConvoLog from "./ConvoLog";

export default function Sidebar() {
  return (
    <aside className="w-[30%]">
      <Menu />
      <ConvoLog />
    </aside>
  );
}
