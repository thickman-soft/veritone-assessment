import React, { useRef } from 'react';
import styled from 'styled-components';

import ModalHeader from './ModalHeader';
import Title from './ModalText/Title';
import Subtitle from './ModalText/Subtitle';
import ItemName from './InputFields/ItemName';
import ItemDesc from './InputFields/ItemDesc';
import ItemNumber from './InputFields/ItemNumber';
import ConfirmButtons from './ConfirmButtons';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/list/action';
import { closeModal } from '../redux/modal/action';

const AddModal = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  border-bottom: 0.5rem solid var(--checkbox-filled);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  flex: 1 1 80%;
`;

const FormWrapper = styled.form`
  height: 100%;
`;

const AddItemModal = () => {
  const dispatch = useDispatch();
  const inputForm = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    const name = inputForm.current[0].value;
    const desc = inputForm.current[1].value;
    const num = inputForm.current[2].value;

    if (name.length < 1) {
      alert('Please enter name of item');
    } else if (num.length > 5) {
      alert('Please enter quantity of items to add');
    } else {
      dispatch(addItem(name, desc, num));
      dispatch(closeModal());
    }
  };

  return (
    <AddModal>
      <ModalHeader modal={'add'} />
      <BodyWrapper>
        <Title text={'Add an Item'} />
        <Subtitle text={'Add your new item below'} />
        <FormWrapper ref={inputForm}>
          <ItemName placeholder={'Item Name'} />
          <ItemDesc placeholder={'Description'} />
          <ItemNumber placeholder={'How many?'} />
        </FormWrapper>
      </BodyWrapper>
      <ConfirmButtons modal={'add'} handleClick={handleClick} buttonText={'Add Item'} />
    </AddModal>
  );
};

export default AddItemModal;
