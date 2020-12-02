import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';

function Navbar({ titles, startValue }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    setActive(startValue);
  }, []);
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {titles.map((e) => <NavItem key={e} changeActive={setActive} active={active === e} title={e}/>)}
      </ul>
    </nav>
  );
}

export default Navbar;
