import React from 'react';
import Logo from '../assets/logo.svg';
import Contact from './Contact';
import { Link } from 'react-scroll';


const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>
        <Link to='contact' activeClass='active' smooth={true} spy={true}>
          Work with me
        </Link>
        </button>
        </div>
    </div>
  </header>
  )
};

export default Header;
