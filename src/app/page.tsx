/* eslint-disable react/no-unescaped-entities */
'use client'
import DropDownMenuLink from "@/components/DropDownMenuLink";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";

import Person from '../../public/person.jpg'
import Image from "next/image";

import {ButtonInstagram, ButtonWhatsapp, SubmitButton } from "@/components/Button";
import { Forms } from "@/components/Forms";

import DashBoardImg from '../assets/img/dashboard.webp'
import App from '../assets/img/app_ios_android_2.90c671a5737e60247bf4.png'
import { FaAndroid, FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-zinc-800 h-full">
      <Header title="Blog" />

      <main className="w-full sm:mt-10" id="content">
        <Hero />
      </main>

      <section id="projeto" className="container mx-auto">
        <div className="flex items-center justify-center mt-5 sm:gap-10">
          
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
           <div className="sm:flex sm:gap-20 items-center justify-center flex-col">
           
            <div className="flex sm:gap-20 sm:flex-row flex-col mb-10 items-center">
              <Image src={DashBoardImg}  alt="" className="rounded-md sm:w-[40%] sm:h-[20%]"/>
            
              <div className="">
              <h1 className="sm:text-2xl sm:font-bold text-white mt-5"><span className="text-green-700">DashBoards</span> Customizados</h1>
                <p className="text-white font-semibold mt-3 mb-3">Dashboards integrados com sua aplicação ou App Mobile</p> 
                <div className="sm:flex gap-10 ">
                  <div className="text-white mb-10">
                    <ol className="sm:ml-0  ml-4">
                      <li>Autenticação</li>
                      <li>Administração de Vendedores</li>
                      <li>Administração de Clientes</li>
                      <li>Métodos de Pagamento</li>
                      <li>Carrinho</li>
                    </ol>  
                  </div>
                  <div className="text-white">
                    <ol className="ml-4 sm:ml-0">
                      <li>Sys Orçamentos/ Pedidos</li>
                      <li>Vitrine de Produtos</li>
                      <li>UpLoad e Storage Files</li>
                      <li>Automação de Contratos</li>
                      <li>Pedidos em Tempo Real</li>
                    </ol>  
                  </div>
                </div>
                
                <p className="sm:mt-0 mt-5 text-1xl font-bold text-white">Precisa de uma solução customizada para sua Empresa?</p>
                <a href="#" className="flex item-center justify-center gap-2 mt-5  p-5  bg-zinc-700 w-[50%]">
                  <p className="text-green-700 font-bold">Dashboard </p>
                  <p className="text-white font-medium"> App</p> 
                </a>
              </div> 
            </div>
           

            <div className="flex sm:gap-20 sm:flex-row-reverse flex-col mb-10 items-center">
              <Image src={App}  alt="" className="rounded-md sm:w-[50%] sm:h-[20%]"/>
            
              <div className="">
              <h1 className="sm:text-2xl sm:font-bold text-white mt-5"><span className="text-green-700">Aplicativos </span> iOS/Android</h1>
                <p className="text-white font-semibold mt-3 mb-3">Já desenvolvemos muitos aplicativos com diversas finalidades</p> 
                <div className="sm:flex gap-20 ">
                  <div className="text-white mb-10">
                    <ol className="sm:ml-0  ml-4">
                      <li>Geolocalição</li>
                      <li>Logística</li>
                      <li>Meteorologia</li>
                      <li>E-commerce</li>
                      <li>Gameficação</li>
                    </ol>  
                  </div>
                  <div className="text-white">
                    <ol className="ml-4 sm:ml-0">
                      <li>Orcamentos</li>
                      <li>Vitrine de Produtos</li>
                    </ol>  
                  </div>
                </div>
                
                <p className="sm:mt-0 mt-5 text-1xl font-bold text-white flex items-center gap-2 ">App's cross-plataform... <span><FaApple className="w-[20px] h-[20px]"/></span> | <span> <FaAndroid className="w-[20px] h-[20px]"/></span> </p>
                <a href="#" className="flex item-center justify-center gap-1  mt-5  p-5  bg-zinc-700 w-[50%] rounded-md">
                  <p className="text-green-700 font-normal">Dashboard </p>
                  <p className="text-white font-bold"> App</p> 
                </a>
              </div> 
            </div>

       
              

               
           </div>

           


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
                  <Forms />
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
