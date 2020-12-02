import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoRequest from './NoRequest';
import { getIsLoader, getRequests } from '../../redux/selectors/requests-selectors';
import Loader from '../Common/Loader';
import ListRequests from './ListRequests/ListRequests';
import { getAllRequests } from '../../redux/thunks/requests-thunk';

function MyLeave() {
  const requests = useSelector(getRequests);
  const isLoader = useSelector(getIsLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRequests());
  }, []);
  return (
    <section className='main-block'>
      <article className='block-wrapper requests'>
        <h2 className='main-block__name'>My leave Requests</h2>
        {isLoader && <Loader/>}
        {requests.length === 0
          ? <NoRequest/>
          : <ListRequests requests={requests}/>}
      </article>
    </section>
  );
}

export default MyLeave;
