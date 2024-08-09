import React from "react";
import LinksItem from "./links-item";
import {links} from '../../constants';

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({sidebarOpen}) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
     <div className="h-full px-3 pb-4 overflow-y-auto">
      <ul className="space-y-2 font-semibold">
        {links.map((link, i) => (
          <LinksItem key={i} {...link} />
        ))}
      </ul>
     </div>
    </aside>
  );
};

export default Sidebar;
