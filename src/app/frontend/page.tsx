'use client'

import Person from '../../../public/person.jpg'

import FrontEndItem from "@/components/FrontEndItem";
import React, { useState } from 'react'

export default function FrontEnd() {
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
      id: 3,
      title: "Sistema de barbearia",
      subTitle: "Desevovemos um site",
      srcImg: Person,
      link: "/",
      linkTitle: "http://localhost"
    }
  ])
  return (
    <main className="w-full">
        <div className="
           flex
           flex-col
           sm:w-[50%]
           p-10
          sm:flex-row  
          container
          mx-auto
          gap-16    
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
  )
}
