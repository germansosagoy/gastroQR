import React from "react";
import ProfileMenu from "../Profile/profile-menu";
import { Moon, Sun, Menu, LayoutDashboard } from "lucide-react";
import { useAuth } from "../../context/auth-context";

interface HeaderProps {
    darkMode: boolean;
    toggleSidebar: () => void;
    toggleDarkMode: () => void;
  }

  
  const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
    const { isAuth } = useAuth();

    console.log('Usuario en el header', isAuth)

    return (
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <Menu className="text-2xl font-semibold" />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <LayoutDashboard className="h-8 me-3 text-xl text-indigo-500" />
              <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap dark:text-white">
                Gastro QR
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <button
              className=" dark:text-slate-700 rounded-full p-2"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="text-xl text-yellow-400" />
              ) : (
                <Moon className="text-xl" />
              )}
            </button>
              <div className="ms-4">
                <ProfileMenu />
              </div>
          </div>
        </div>
      </div>
    </nav>
    );
  };
  export default Header;