'use client'
import DropDownMenuLink from "@/components/DropDownMenuLink";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useState } from "react";
import Person from '../../public/person.jpg'
import Image from "next/image";
import FrontEndItem from "@/components/FrontEndItem";
import {ButtonInstagram, ButtonWhatsapp } from "@/components/Button";



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
                  sm:m-0
                  "
                />
              </div>  
            </div>
        </main>
       
      </section>
     
      <section className="container mx-auto bg-green-900-">
        
        <div className=" 
        flex  
        w-full 
        flex-col 
        sm:flex-row
        
        ">
        
          <div className="
          sm:flex-col
          sm:items-start
         
          w-[100%] 
          sm:w-[50%]
          p-10 
          flex 
          flex-col 
          items-center
          ">
            
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
              mb-10
            ">Rede Sociais</h1>
            <div className="flex gap-10 mt-10">
            <ButtonWhatsapp size="30" color="green" href='/' />
            <ButtonInstagram size="30" color="green" href="/" />
            
            </div>
            
          </div> 
          
        </div>
      </section>


    

    </div>
  );
}
