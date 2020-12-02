import React from 'react';
import PropTypes from "prop-types";
import Button from "../../Common/Button";

function FormFooter({ onChangeTextarea, comment }) {
  return (
    <footer className='footer'>
      <div className='label'>Comment</div>
      <textarea className='footer__textarea' onChange={(event) => onChangeTextarea(event.target.value)}
                value={comment}/>
      <div className='footer-submit'>
        <Button className='btn'>Submit</Button>
        <div>
          <span>Have questions?</span>
          <span className='footer-submit__faq'>Read FAQ</span>
        </div>
      </div>
    </footer>
  );
}

FormFooter.propTypes = {
  onChangeTextarea: PropTypes.func,
  comment: PropTypes.string,
};

export default FormFooter;
