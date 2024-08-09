import React from "react";
import { Moon, Sun, Menu, LayoutDashboard } from "lucide-react";

interface HeaderProps {
    darkMode: boolean;
    toggleSidebar: () => void;
    toggleDarkMode: () => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
    return (
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button onClick={toggleSidebar} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <Menu className="text-2xl font-semibold" />
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <LayoutDashboard className="h-8 me-3 text-xl text-indigo-500" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Gastro QR
                </span>
              </a>
            </div>
            <button
              className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="text-2xl" />
              ) : (
                <Moon className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>
    );
  };
  export default Header;