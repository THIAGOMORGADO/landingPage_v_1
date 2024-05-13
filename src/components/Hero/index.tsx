import Image from "next/image";
import Person from '../../../public/person.jpg'
import React from 'react'

export function Hero() {
  return (
    <div className="
    container 
    rounded-md
    mx-auto 
    flex
    flex-col-reverse
    justify-center 
    items-center 
    sm:gap-[3rem]
    sm:flex-row
    py-5
    sm:py-10
    flex-1
    
    ">
    <div className="font-bold text-white sm:m-5">
      <h3 className="text-2xl  mb-5">Eu me chamo...</h3>
      <h2 className="text-3xl mb-5">Thiago Morgado</h2>
      <h1 className="sm:text-4xl bg-gradient-to-r from-green-700 to-green-900 p-1 rounded-lg mb-5">Desemvolvedor <span>Front-end</span> / <span>Mobile</span></h1>
    </div>
    <div className="">
      <Image
        src={Person}
        alt="Thiago"
        width={300}
        height={300}
        className="
        rounded-full
        shadow-2xl
        m-4
        flex
        flex-col-reverse
        flex-1
        bg-red-300
        mt-10
        sm:m-0
        "
      />
    </div>
  </div>
  )
}
