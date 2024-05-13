import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import DropDownMenuLink from '../DropDownMenuLink';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="relative ">
      <button
        onClick={() => {setIsOpen(!isOpen)}}
        className="flex items-center sm:hidden"
      >
      <LuMenu 
        className='font-bold text-white w-8 h-6 '
      />
      </button>
      {isOpen && (
    
     <div className="sm:hidden fixed inset-0  mt-11 h-auto  bg-black bg-opacity-25 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}">
       <div className="relative bg-green-600 w-screen max-h-screen overflow-y-auto rounded-md shadow-lg transition-transform ${isOpen ? 'translate-y-5' : '-translate-y-full'}">
          <DropDownMenuLink label='Home' href='/'/>
          <DropDownMenuLink label='Sobre me' href='/'/>
          <DropDownMenuLink label='Projeto' href='/'/>
          <DropDownMenuLink label='Contatos' href='/'/>
       </div>
     </div>
  
      )}
    </div>
  );
};

export default DropdownMenu;
