import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAuth } from "../../context/auth-context";

// interface ProfileMenuProps {
//   user: { username: string, avatar?: string };
// }

const ProfileMenu: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useAuth();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  // const initial = user.username.toUpperCase(); // obtiene la inicial del usuario

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
      >
        <div className="bg-red-700 w-16 h-auto text-white flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar" />
        </div>
        {dropdownOpen ? (
          <IoIosArrowUp className="ms-2 text-gray-500 dark:text-gray-200" />
        ) : (
          <IoIosArrowDown className="ms-2 text-gray-500 dark:text-gray-200" />
        )}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 z-20 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Perfil
            </a>
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
