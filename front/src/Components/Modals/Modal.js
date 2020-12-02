import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button';
import Portal from '../Portal/Portal';

function Modal({
  title, isOpen, onCancel, onSubmit, children,
}) {
  return (
    <>{isOpen
    && <Portal>
      <div className='modal'>
        <header className='modal-header'>Request a <span className='modal-header__name'>{title}</span></header>
        <main className='modal-body'>
          <p className='modal-body__warn'>
            The selected interval includes only public holidays or weekend days.
            Please review the selected dates.
          </p>
          <p className='modal-body__description'>
            Would you like to confirm the request with the dates as suggested
            below?
          </p>
          <div className='modal-body-data'>
            {children}
          </div>
        </main>
        <footer className='modal-footer'>
          <Button onClick={onCancel} className='btn light modal-footer__button'>Cancel</Button>
          <Button onClick={onSubmit} className='btn modal-footer__button'>Confirm</Button>
        </footer>
      </div>
    </Portal>}
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  onCancel: () => {
  },
  onSubmit: () => {
  },
  isOpen: false,
  title: 'vacation',
};

export default Modal;
