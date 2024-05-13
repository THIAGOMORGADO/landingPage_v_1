import Image from 'next/image'
import React, { ReactNode } from 'react'

type ImageProps = {
  src: string;
  alt: string;
  children: ReactNode
}

export function BackImg({src, alt, children} : ImageProps) {
  return (
    <Image src={src} alt={alt}>
      {children}
    </Image>
    
  )
}
