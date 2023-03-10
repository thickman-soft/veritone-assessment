import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Title from "./ModalText/Title";
import Subtitle from "./ModalText/Subtitle";
import ConfirmButtons from "./ConfirmButtons";

import { removeItem } from "../redux/list/action";
import { closeModal } from "../redux/modal/action";
import { getModalCurrentItem } from "../redux/selector";

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
  const { id } = useSelector(getModalCurrentItem);
  const handleClick = () => {
    dispatch(removeItem(id));
    dispatch(closeModal());
  };

  return (
    <DeleteModal>
      <TextWrapper>
        <Title>Delete Item?</Title>
        <Subtitle>
          Are you sure you want to delete this item? This can not be undone.
        </Subtitle>
      </TextWrapper>
      <ConfirmButtons handleClick={handleClick} buttonText="Delete" />
    </DeleteModal>
  );
};

export default DeleteItemModal;
