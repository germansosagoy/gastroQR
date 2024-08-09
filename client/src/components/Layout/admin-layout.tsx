import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';

interface AdminLayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ darkMode, toggleDarkMode, sidebarOpen, toggleSidebar }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex justify-center items-center p-48 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
