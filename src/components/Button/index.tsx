import React from 'react'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";


type IconProps = {
  size: string;
  color: string;
  href: any
}


function ButtonWhatsapp({size, color, href}:IconProps) {
  return (
    <a href={href}>
     <FaWhatsapp  size={size} color={color} />
    </a>
  )
}

function ButtonInstagram({size, color, href}:IconProps) {
  return (
    <a href="">
     <FaInstagram  size={size} color={color} />
    </a>
  )
}

function SubmitButton({size, color, href}:IconProps) {
  return(
    <a href="">
    <FaInstagram  size={size} color={color} />
   </a>
  )
}

export  {ButtonWhatsapp, ButtonInstagram, SubmitButton}