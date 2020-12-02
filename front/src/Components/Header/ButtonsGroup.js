import React from 'react';
import Avatar from '../Common/Avatar';
import avatar from '../../Img/userpic_28px.png';
import plane from '../../Img/plane.svg';
import onOff from '../../Img/Vector.svg';
import Button from '../Common/Button';

function ButtonsGroup() {
  return (
    <div className='buttons-group'>
      <Button className='btn'> <img src={plane} alt='Button`s icon'/></Button>
      <Button className='btn'>
        <Avatar className='user-avatar' avatar={avatar}/>
        <span className='buttons-group__name'>Anna Smith</span>
      </Button>
      <Button className='btn'> <img src={onOff} alt='Button`s icon'/></Button>
    </div>
  );
}

export default ButtonsGroup;
