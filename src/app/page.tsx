'use client'
import DropDownMenuLink from "@/components/DropDownMenuLink";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useState } from "react";
import Person from '../../public/person.jpg'
import Image from "next/image";
import FrontEndItem from "@/components/FrontEndItem";
import {ButtonInstagram, ButtonWhatsapp, SubmitButton } from "@/components/Button";



export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [frontEndData, setFrontEndData] = useState([
    {
      id: 1,
      title: "Front-end",
      subTitle: "Front-end",
      srcImg: Person,
      link: "/",
      linkTitle: "http://localhost"
    },
    {
      id: 2,
      title: "Sistema de barbearia",
      subTitle: "Desevovemos um site",
      srcImg: Person,
      link: "/",
      linkTitle: "http://localhost"
    },
    {
      id: 2,
      title: "Sistema de barbearia",
      subTitle: "Desevovemos um site",
      srcImg: Person,
      link: "/",
      linkTitle: "http://localhost"
    },
    
    
  ])
  return (
    <div className="bg-zinc-800 h-full">
      <Header title="Blog" />

      <main className="w-full sm:mt-10" id="content">
        <Hero />
      </main>

      <section id="projeto" className="container mx-auto">
        <div className="flex items-center justify-center mt-5 sm:gap-10">
          <p className="
          font-bold mt-5 
          text-2xl 
          text-white 
          border-b-2
          rounded-r-sm 
          rounded-l-sm 
          hover:border-green-600
          transition: ease-in
          duration-500
          
          ">Ultimos Projetos</p>
        </div>
        <main className="w-full flex flex-col ">
          <div className="
            flex
            gap-5
            flex-col
              
              sm:flex-row
            p-10
            items-center justify-center
            w-[100%]
            container
            mx-auto
            sm:gap-16  
          
              ">
            {
              frontEndData.map((item) => {
                return (
                  <FrontEndItem
                    key={item.id}
                    srcImg={item.srcImg}
                    title={item.title}
                    subTitle={item.subTitle}
                    link={item.link}
                    linkTitle={item.linkTitle}
                  />
                );
              })
            }

            

          </div>
        </main>
      </section>
        
      <section id="projeto" className="container mx-auto " >
        <main className=" 
          w-full 
          p-10 
          flex 
          sm:items-center 
          sm:justify-center 
          place-items-center
          flex-col"
        >
            
            <div className="
            flex 
            sm:flex-row 
            sm:items-center 
            sm:justify-center  
            w-[80%] 
            sm:p-10 
           
            sm:gap-20 
            flex-col">
              
              <div className="">
                <p className="
                  font-bold 
                  mt-5 
                  mb-10
                  text-2xl 
                  text-white 
                  border-b-2
                  rounded-r-sm 
                  rounded-l-sm 
                  hover:border-green-600
                  transition: ease-in
                  duration-500
                  ">Sobre me</p>
                <h4 className="text-white font-bold text-justify">
                Olá! Me chamo Thiago Morgado e há 10 anos desenvolvo aplicativos móveis que são fáceis de usar e bonitos de ver. Tenho muita paixão por transformar ideias em realidade e adoro ver como os aplicativos podem facilitar o dia a dia das pessoas e ajudar as empresas a crescer. Estou aqui para conversar sobre como posso fazer o seu projeto brilhar. Vamos criar algo incrível juntos?
                </h4>
              </div>
              
              <div className="flex ">
                <Image
                  src={Person}
                  alt="Thiago"
                  className="
                  rounded-full
                  shadow-2xl
                  w-[100%]
                  m-4
                  flex
                  flex-col-reverse
                  flex-1
                  bg-red-300
                  mt-10
                  mb-20
                  sm:m-0
                  "
                />
              </div>  
            </div>

            <div className="
                font-bold mt-5 
                text-2xl 
                text-white 
                border-b-2
                rounded-r-sm 
                rounded-l-sm 
                hover:border-green-600
                transition: ease-in
                duration-500
                
              ">
                <h3>Mande um menssagem</h3>

                <div className="flex flex-col">
                  <form action="" className="flex flex-col w-full mt-10 mb-10">
                    <input type="Nome" placeholder="Digite seu nome" className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]"/>
                    <input type="phone" placeholder="informe seu numero" className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]"/>
                  
                    <input type="phone" placeholder="informe seu e-mail" className="mb-10  rounded-md bg-zinc-700 text-sm p-[1rem]" />
                  <div className="flex justify-center items-center">
                    <button 
                      type="submit" 
                      className="
                      bg-green-600 
                      w-[80%] 
                      rounded-md 
                      hover:bg-green-700"
                      >Enviar dados
                    </button>
                  </div>

                  </form>
                </div>
              </div>
                


              <div className="
                container 
                mx-auto 
                p-10 
                flex-col
                flex 
                items-center 
                justify-center 
                rounded-lg
                ">
                   <p className="
                font-bold mt-5 
                text-2xl 
                text-white 
                border-b-2
                rounded-r-sm 
                rounded-l-sm 
                hover:border-green-600
                transition: ease-in
                duration-500
                mb-10
              ">+ de 400 clientes satisfeitos</p>
                <div className="flex">
                    <ol className="sm:flex sm:gap-2  text-white text-lg font-bold">
                      <li className="p-10">Sistemas Web</li>
                      <li className="p-10">Aplicativos Mobile</li>
                      <li className="p-10">iOS / Android</li>
                      <li className="p-10">Sites Institucionais</li>
                    </ol>
                </div>
                 
              </div>
            </main>
       
      </section>
     
      <section className="flex bg-zinc-700">
        
        <div className=" 
        flex  
        justify-center
        items-center
        flex-col
      
        container
        mx-auto 
        sm:flex-row
        bg-zinc-700
        ">
        
        <div className="flex  flex-1 sm:flex-row flex-col">
          <div className="
          sm:flex-col
          sm:items-start
         
          w-[100%] 
          sm:w-[50%]
          p-10 
          flex 
          flex-row 
          items-center
          ">
            
          <div className="">
              <div className="">
                <h2 className="
                  font-bold mt-5 
                  text-2xl 
                  text-white 
                  border-b-2
                  rounded-r-sm 
                  rounded-l-sm 
                  hover:border-green-600
                  transition: ease-in
                  duration-500
                  mb-10
                ">Informacoes de contato</h2>
                <h1 className="text-2xl text-white font-bold">Nome: Thiago Morgado</h1>
                <p className="text-lg text-white font-bold ">email: thiago.n.morgado@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="
          sm:flex-col
          sm:items-center
          sm:w-[50%]
          sm:justify-center
         
          w-[100%] 
          flex 
          flex-col 
          items-center
          p-10
          ">
            <h1 className="
              font-bold mt-5 
              text-2xl 
              text-white 
              border-b-2
              rounded-r-sm 
              rounded-l-sm 
              hover:border-green-600
              transition: ease-in
              duration-500
              
            ">Rede Sociais</h1>
            <div className="flex gap-10 mt-5">
            <ButtonWhatsapp size="30" color="green" href='/' />
            <ButtonInstagram size="30" color="green" href="/" />
            
            </div>
            
          </div> 
        </div>
    
        </div>
      </section>
    </div>
  );
}
