import React from 'react';
import ItemList from './ItemList/ItemList';
import icon from '../../../Img/ArrowRight.svg';

function BlockList({ requests }) {
  const openSelectedRequest = (e) => {
    console.log(e);
  };

  return (
    <div className='block'>
      <header className='block-header'>
        <span className='block-header__year'>{new Date(requests[0].created).getFullYear()} Year,</span>
        <span className='block-header__amount'>{requests.length}</span>
      </header>
      <ul>
        {requests.map((e, i) => <ItemList key={e.id} id={e.id} className={i % 2 === 0 ? 'parity' : 'odd'}
        requestType={e.select} status={e.status} created={e.created} range={e.range} startDate={e.startDate}
        endDate={e.endDate} icon={icon} openSelectedRequest={openSelectedRequest}/>)}
      </ul>
    </div>
  );
}

export default BlockList;
