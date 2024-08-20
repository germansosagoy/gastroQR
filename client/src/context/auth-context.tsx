import React, { createContext, useState, useContext, ReactNode, useEffect} from 'react';
import {registerRequest, loginRequest} from '../api/auth';

interface AuthContextProps {
  user: User | null;
  login: (identifier: string, password: string) => Promise<void>; 
  signup: (data: registerData) => Promise<void>;
  // logout: () => void;
  isAuth: boolean;
  errors: string[];
  loading: boolean;
}

interface User {
  id: string;
  username: string;
  password: string,
  email: string;
}

interface registerData{
  id: string;
  companyName: string;
  username: string;
  email: string;
  password: string;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // limpiar errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user: registerData) => {
    setLoading(true);
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuth(true);
      }
    } catch (error: any) {
      console.log('error', error.response.data);
      setErrors([error.response.data.message]);
    } finally {
      setLoading(false);
    }
  };

  
  const login = async (identifier: string, password: string) => {
    setLoading(true);
    try {
      const res = await loginRequest({ identifier, password });  // Enviar identifier al backend
      setUser(res.data);  // Aquí res.data debería ser del tipo User
      setIsAuth(true);
    } catch (error: any) {
      console.log(error);
      setErrors([error.response.data.message]);
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <AuthContext.Provider value={{ user, signup, login, isAuth, errors, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }
  return context;
}


