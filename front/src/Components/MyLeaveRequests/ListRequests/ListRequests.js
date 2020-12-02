import React from 'react';
import sortAndDividedArray from '../../../Utils/sortAndDividedArray';
import BlockList from './BlockList';

function ListRequests({ requests }) {
  const sortRequests = sortAndDividedArray(requests);

  return (
    <div className='request-list'>
      {sortRequests.map((e) => <BlockList key={e[0].id} requests={e}/>)}
    </div>
  );
}

export default ListRequests;
