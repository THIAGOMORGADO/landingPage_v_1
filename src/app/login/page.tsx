/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import firebase, { auth } from '../../service/Auth'
import 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';


const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  
  async function handleLogin(e: any) {
    e.preventDefault();
    try {
     const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user.providerData)
      router.push('/dashboard'); // Redirecionar após login bem-sucedido
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }

  return(
    <div className="w-screen h-screen bg-zinc-800 flex items-center justify-center" id="content">
      <div className="container mx-auto flex items-center justify-center ">
        <div className=" sm:flex items-center justify-center flex-col border-2 rounded-md w-full sm:w-[30%] pb-10">
          <div className=" flex bg-green-600 w-full h-[6rem] items-center justify-center">
            <h1 className='font-bold text-white text-xl'>Login</h1>
          </div>

          <form action="" className='flex flex-col p-5'>
            <label className='text-white font-bold mt-5'>Email:</label>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            placeholder='Digite seu email' 
            className='p-2 bg-zinc-700 text-white text-base font-bold rounded-sm mt-2' />

            <label className='text-white font-bold mt-5'>Senha:</label>
            <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              type="password" 
              placeholder='Digite seu email' 
              className='p-2 bg-zinc-700 text-white font-bold rounded-sm mt-2' />
          </form>

          <div className="flex items-center justify-center mt-10">
          <button
            type="submit"
            value="Enviar dados"
            className="bg-green-600 sm:w-[100%] rounded-md hover:bg-green-700 p-[.5rem] text-white font-bold"
            onClick={handleLogin}
          >
            Fazer login
          </button> 
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default login;