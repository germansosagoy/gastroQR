import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
//admin routes
import AdminLayout from "./components/Layout/admin-layout";
import AdminDashboard from "./components/AdminDashboard";
//auth routes
import SignUp from "./pages/register/sign-up";
import SignIn from "./pages/login/sign-in";


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
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={
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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
