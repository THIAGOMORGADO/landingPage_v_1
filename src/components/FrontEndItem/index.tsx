import Image from 'next/image'
import React from 'react'


type FrontEndInfoProps = {
  srcImg: any;
  title: any;
  subTitle: any;
  link: any;
  linkTitle: any;
}

export default function FrontEndItem({link, srcImg, subTitle, title, linkTitle} : FrontEndInfoProps) {
  return (
    
            <div className="mb-10 bg-green-600 rounded-md w-[70%] p-1 :flex-col">
              <div className="">
                <Image
                    src={srcImg}
                    alt="Thiago"
                    
                    className="
                    sm:w-full
                    md:w-full
                    lg:w-full
                    h-[8rem]
                    mb-5
                    rounded-md
                    
                    "
                  />  
              </div>
                
                <h1 className='
                  text-2xl
                  sm:text-3xl 
                  font-bold 
                  sm:mt-4
                  sm:mb-4 
                  text-white
                  '>{title}</h1>
                <h2
                 className='
                 text-xl
                 sm:text-2xl 
                 font-normal 
                 sm:mt-22
                 sm:mb-2 
                 text-white
                 '  
                >{subTitle}</h2>
              <div className="flex items-center justify-center p-5">
              <a 
                href={link}
                className='
                bg-zinc-800 
                p-2 
                rounded-sm
                hover:rounded-md 
                transition: 5s
                duration-500
                text-white
                font-bold 
                hover:bg-zinc-900 
                transition 
                ease-in-out 
                delay-150 
                hover:-translate-y-1 
                hover:scale-110
                hover:text-green-600
                
                
                '
                >{linkTitle}</a>  
              </div>
               
            </div>
         
  )
}
