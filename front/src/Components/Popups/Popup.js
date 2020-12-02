import React from 'react';
import ItemList from '../MyLeaveRequests/ListRequests/ItemList/ItemList';

function Popup() {
  return (
    <div className='popup'>
      <header className='popup-header'>
        <div className='popup-header-name'></div>
        <ItemList/>
      </header>
      <main className='popup-main'></main>
      <footer className='footer'></footer>
    </div>
  );
}

export default Popup;
