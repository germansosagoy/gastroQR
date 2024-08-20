import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/auth-context';
import { useNavigate, Link} from 'react-router-dom';


const SignIn: React.FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { login, isAuth, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;
    login(email, password);  // Aquí puedes usar email como identifier
  };
  
  
  useEffect(() => {
    if(isAuth) {
      navigate('/admin');
    }
  }, [isAuth]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
        {loginErrors && <p className="text-red-500 text-center">{loginErrors}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700">
              Usuario o Correo electrónico
            </label>
            <input
              id="usernameOrEmail"
              type="text"
              {...register("email", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-center">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-center">{errors.password.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          ¿No tienes una cuenta? <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-500">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
