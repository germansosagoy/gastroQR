import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/Layout/admin-layout";
import AdminDashboard from "./components/AdminDashboard";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminLayout
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              sidebarOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        >
          <Route path="" element={<AdminDashboard />} />
          {/* Otras rutas del dashboard pueden ir aquí */}
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
