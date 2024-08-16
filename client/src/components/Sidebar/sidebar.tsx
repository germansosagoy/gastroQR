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
    <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col justify-between">
      {/* Top section */}
      <div>
        <div className="mb-2 mt-2">
        </div>
        <ul className="space-y-2 text-base font-semibold">
          {links.slice(0, 2).map((link, i) => (
            <LinksItem key={i} {...link} />
          ))}
        </ul>
      </div>

        {/* Divider */}
        <hr className="my-4 mx-4 border-gray-200 dark:border-gray-700" />

      {/* Middle section */}
      <div className="mb-4 mt-4">
        <h3 className="px-1 mb-2 text-gray-500 tracking-wider text-sm font-semibold">
            Menú Principal
        </h3>
        <ul className="space-y-2 text-base text-sm font-semibold">
          {links.slice(2, 8).map((link, i) => (
            <LinksItem key={i} {...link} />
          ))}
        </ul>
      </div>

      <hr className="my-8 mx-4 border-gray-200 dark:border-gray-700" />

      {/* Bottom section */}
      <div className="mt-auto">
        <ul className="space-y-2 text-base font-semibold">
          {links.slice(8).map((link, i) => (
            <LinksItem key={i} {...link} />
          ))}
        </ul>
      </div>
    </div>
  </aside>
  );
};

export default Sidebar;
