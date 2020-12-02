import React from 'react';
import Navbar from './Header/Navbar';
import Logo from './Header/Logo';
import ButtonsGroup from './Header/ButtonsGroup';

function Header() {
  const titles = ['Address Book', 'Leave Request'];
  return (
    <header className='header'>
      <div className='wrapper'>
        <Logo/>
        <Navbar titles={titles} startValue='Leave Request'/>
        <ButtonsGroup/>
      </div>
    </header>
  );
}

export default Header;
