import React, { ReactNode } from 'react';
import { LuMenu } from 'react-icons/lu';

// import { Container } from './styles';

type NavProps = {
  children: ReactNode;
}

const Nav = ({children} : NavProps) => {
  return(
    <nav className='items-center flex'>
          <ul >
           {children}
          </ul>
        </nav>
  );
}

export default Nav