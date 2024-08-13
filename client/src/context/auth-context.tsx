import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextProps {
  user: User | null;
  login: (usernameOrEmail: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface RegisterData {
  companyName: string;
  username: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = async (data: RegisterData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', data);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error al registrar', error);
      throw new Error('Registro fallido');
    }
  };

  const login = async (usernameOrEmail: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { usernameOrEmail, password });
      setUser(response.data.user); // almacenar los datos del usuario en el estado
      localStorage.setItem('token', response.data.token); // almacenar el token en el localStorage
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      throw new Error('Credenciales inválidas');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
