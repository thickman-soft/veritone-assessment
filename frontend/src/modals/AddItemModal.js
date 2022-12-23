import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import ModalHeader from "./ModalHeader";
import Title from "./ModalText/Title";
import Subtitle from "./ModalText/Subtitle";
import ItemName from "./InputFields/ItemName";
import ItemDesc from "./InputFields/ItemDesc";
import ItemNumber from "./InputFields/ItemNumber";
import ConfirmButtons from "./ConfirmButtons";

import { addItem } from "../redux/list/action";
import { closeModal } from "../redux/modal/action";

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
  const [inputData, setInputData] = useState({
    name: null,
    desc: null,
    num: null,
  });

  const handleClick = (event) => {
    event.preventDefault();
    const name = inputData["name"] || "";
    const desc = inputData["desc"] || "";
    const num = inputData["num"] || 0;

    if (name.length < 1) {
      alert("Please enter name of item");
    } else if (num === 0) {
      alert("Please enter quantity of items to add");
    } else {
      dispatch(addItem(name, desc, num));
      dispatch(closeModal());
    }
  };

  const valueChangeHandler = (event) => {
    const type = event.target.name;
    const value = event.target.value;
    setInputData({ ...inputData, [type]: value });
  };

  return (
    <AddModal>
      <ModalHeader />
      <BodyWrapper>
        <Title>Add an Item</Title>
        <Subtitle>Add your new item below</Subtitle>
        <FormWrapper>
          <ItemName
            name="name"
            placeholder="Item Name"
            value={inputData["name"]}
            onChange={valueChangeHandler}
          />
          <ItemDesc
            name="desc"
            placeholder="Description"
            value={inputData["desc"]}
            onChange={valueChangeHandler}
          />
          <ItemNumber
            name="num"
            placeholder="How many?"
            value={inputData["num"]}
            onChange={valueChangeHandler}
          />
        </FormWrapper>
      </BodyWrapper>
      <ConfirmButtons handleClick={handleClick} buttonText="Add Item" />
    </AddModal>
  );
};

export default AddItemModal;
