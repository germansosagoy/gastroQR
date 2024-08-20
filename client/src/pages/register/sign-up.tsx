import React, { useState, useEffect } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
import {useForm, SubmitHandler} from 'react-hook-form';
import { useAuth } from '../../context/auth-context';
import { useNavigate, Link } from 'react-router-dom';

interface SignUpProps {
  companyName: string;
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
  id: string;
  identifier: string;
}

const SignUp: React.FC = () => {
  const { signup, errors: registerErrors, isAuth } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpProps>();

  useEffect(() => {
    if (isAuth) navigate("/admin");
  }, [isAuth]);
  
  const onSubmit: SubmitHandler<SignUpProps> = async (value) => {
    await signup(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      {/* {registerErrors.map((error) => (
        <p className="text-red-500 text-sm">{error}</p>
      )) */}
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Registrate para obtener una cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          O{' '}
          <Link to="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
            Inicia sesión ahora
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="companyName" className="sr-only">
              Nombre de la empresa
            </label>
            <input
              id="companyName"
              type="text"
              autoFocus
              {...register('companyName', { required: 'El nombre de la empresa es requerido.' })}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nombre de la empresa"
            />
            {errors.companyName?.message && (<p className="text-red-500">{errors.companyName?.message}</p>)}
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register('username', { required: 'Usuario es requerido.' })}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nombre de usuario"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'El correo electrónico es requerido.' })}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="tuempresa@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="confirmEmail" className="sr-only">
              Confirmar email
            </label>
            <input
              id="confirmEmail"
              type="email"
              {...register('confirmEmail', {
                required: 'Por favor, repite tu correo electrónico.',
                validate: (value) =>
                  value === watch('email') || 'Los correos no coinciden',
              })}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="tuempresa@example.com"
            />
            {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'La contraseña es requerida.' })}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Tu contraseña"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Recuerdame
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear mi cuenta
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignUp;
