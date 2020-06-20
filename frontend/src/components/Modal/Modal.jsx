import React from 'react';
import './modal.scss';

export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main modal-content">
          <button className="close-modal-btn" onClick={handleClose}>X</button>
          {children}
        </section>
      </div>
    );
  };