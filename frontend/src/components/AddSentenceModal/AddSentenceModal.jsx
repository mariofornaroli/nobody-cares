import React from 'react';
import { Modal } from './../Modal/Modal';
import { AddSentenceForm } from './../AddSentenceForm/AddSentenceForm';

export const AddSentenceModal = ({ handleClose, show }) => {

  return (
    <Modal show={show} handleClose={handleClose}>
      <AddSentenceForm />
    </Modal>
  );
};