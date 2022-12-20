import React, { useRef } from "react";
import styled from "styled-components";

import ModalHeader from "./ModalHeader";
import Title from "./ModalText/Title";
import Subtitle from "./ModalText/Subtitle";
import ItemName from "./InputFields/ItemName";
import ItemDesc from "./InputFields/ItemDesc";
import ItemNumber from "./InputFields/ItemNumber";
import ConfirmButtons from "./ConfirmButtons";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../redux/list/action";
import { closeModal } from "../redux/modal/action";

const EditModal = styled.div`
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

const SubmittedBox = styled.input`
  margin: 1.5rem 1.5rem;
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
`;

const TextWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const PurchasedText = styled.label`
  color: var(--modal-placeholders);
  font-family: "Nunito", sans-serif;
  vertical-align: middle;
`;

const EditItemModal = () => {
  const dispatch = useDispatch();
  const curItem = useSelector((state) => state.modal.curItem);
  const inputForm = useRef();

  console.log(curItem);

  const updateItemHandler = (event) => {
    event.preventDefault();

    const name = inputForm.current[0].value;
    const desc = inputForm.current[1].value;
    const num = parseInt(inputForm.current[2].value);
    const isPurchased = inputForm.current[3].checked;

    if (name.length < 1) {
      alert("Please enter name of item");
    } else if (num.length > 5) {
      alert("Please enter quantity of items to add");
    } else {
      dispatch(
        updateItem(curItem.id, { id: curItem.id, name, desc, isPurchased, num })
      );
      dispatch(closeModal());
    }
  };

  return (
    <EditModal>
      <ModalHeader modal={"edit"} />
      <BodyWrapper>
        <Title text={"Edit an Item"} />
        <Subtitle text={"Edit your item below"} />
        <FormWrapper ref={inputForm}>
          <ItemName text={curItem.name} />
          <ItemDesc text={curItem.desc} />
          <ItemNumber text={curItem.num} />
          <TextWrapper>
            <SubmittedBox
              type="checkbox"
              defaultChecked={curItem.isPurchased}
            />
            <PurchasedText>Purchased</PurchasedText>
          </TextWrapper>
        </FormWrapper>
      </BodyWrapper>
      <ConfirmButtons
        modal={"edit"}
        handleClick={updateItemHandler}
        buttonText={"Save Item"}
      />
    </EditModal>
  );
};

export default EditItemModal;
