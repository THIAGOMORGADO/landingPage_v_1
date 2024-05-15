/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import DropdownMenu from '../DropDownMenu';
import DropDownMenuLink from '../DropDownMenuLink';
// import { Container } from './styles';

type headerProps = {
  title: string;
}

const Header = ({title} : headerProps) => {
  return(
    <header className="bg-green-600 w-full h-[3rem] flex items-center px-5 ">
      <div className="container mx-aut flex items-center justify-between">
       
        <h1 className='text-md text-white font-bold md:font-normal md:text-2xl'>"{"{dev: Thiago morgado}"}"</h1>
      
        <nav className='items-center flex'>
          <ul >
            <li className='flex gap-3 hidden sm:flex '>
              <DropDownMenuLink label='Home' href='/' />
              <DropDownMenuLink label='Sobre-me' href='/' />
              <DropDownMenuLink label='Projeto' href='/' />
              <DropDownMenuLink label='Contato' href='/' />
            </li>
           <DropdownMenu />
          </ul>
        </nav>
       
      </div>
      
    </header>
  )
  ;
}

export default Header;