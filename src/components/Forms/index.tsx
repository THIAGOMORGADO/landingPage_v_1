'use client'
import React, { useEffect, useState } from 'react';
import {collection, addDoc} from 'firebase/firestore'
import { db } from '@/service';

export const Forms = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async  function handleSendMessager (e: any) {
    e.preventDefault()

    const data = {
      name,
      phone,
      email,
      message,
      
    }

    try {
     await addDoc(collection(db, "Contatos"), data);
      
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <form className="flex flex-col w-full mt-10 mb-10">
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome" 
        className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]" 
      />
      <input 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="informe seu numero" 
        className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]" 
      />

      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="informe seu e-mail"
        className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]" 
      />

      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="informe seu assunto"
        className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]" 
        maxLength={50}
      />

      

      <div className="flex justify-center items-center">
      
        <button
          type="submit"
          value="Enviar dados"
          className="bg-green-600 w-[80%] rounded-md hover:bg-green-700"
          onClick={handleSendMessager}
          >
            Enviar dados
          </button> 
      </div>

    </form>
  );
}

