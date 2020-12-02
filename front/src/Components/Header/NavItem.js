import React from 'react';

function NavItem({ title, active, changeActive }) {
  return (
    <li className='nav-item' onClick={() => { changeActive(title); }}>
      <a className={`nav-link ${active ? 'active' : ''}`} href='#'>{title}</a>
    </li>
  );
}

export default NavItem;
