import React from 'react';
import styled from 'styled-components';

import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ConfirmButtons from './ConfirmButtons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/list/action';
import { closeModal } from '../redux/modal/action';

const DeleteModal = styled.div`
  width: 25rem;
  height: 15rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  padding: 0.5rem;
`;

const DeleteItemModal = () => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.modal.curItem.id);
  const handleClick = () => {
    dispatch(removeItem(id));
    dispatch(closeModal());
  };

  return (
    <DeleteModal>
      <TextWrapper>
        <Title text='Delete Item?' />
        <Subtitle text='Are you sure you want to delete this item? This can not be undone.' />
      </TextWrapper>
      <ConfirmButtons modal={'del'} handleClick={handleClick} buttonText={'Delete'} />
    </DeleteModal>
  );
};

export default DeleteItemModal;
