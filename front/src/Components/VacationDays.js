import React from 'react';
import { useSelector } from 'react-redux';
import { getAvalibleDays } from '../redux/selectors/requestForm-selectors';

function VacationDays() {
  const available = useSelector(getAvalibleDays);

  return (
  <section className='main-block'>
    <article className='block-wrapper'>
      <h2 className='main-block__name'>Vacation Days</h2>
      <div className='availible'>
        <span className='available__name'>Available</span>
        <span className='availible__count'>{available}</span>
      </div>
    </article>
  </section>
  );
}

export default VacationDays;
