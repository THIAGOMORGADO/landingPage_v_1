import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

type DropDownMenuitem = {
  label: string;
  href: string
}

const DropDownMenuLink = ({href, label} : DropDownMenuitem) => {
  return(
    <Link href={href} className="block px-4 py-2 text-sm text-white hover:bg-green-800">{label}</Link>
  );
}

export default DropDownMenuLink;