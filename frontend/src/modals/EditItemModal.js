import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import ModalHeader from "./ModalHeader";
import Title from "./ModalText/Title";
import Subtitle from "./ModalText/Subtitle";
import ItemName from "./InputFields/ItemName";
import ItemDesc from "./InputFields/ItemDesc";
import ItemNumber from "./InputFields/ItemNumber";
import ConfirmButtons from "./ConfirmButtons";

import { updateItem } from "../redux/list/action";
import { closeModal } from "../redux/modal/action";
import { getModalCurrentItem } from "../redux/selector";

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

const PurchaseCheckBox = styled.input`
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
  const [inputData, setInputData] = useState({
    name: "",
    desc: "",
    num: 0,
    isPurchased: false,
  });
  const dispatch = useDispatch();
  const curItem = useSelector(getModalCurrentItem);
  const inputForm = useRef();

  useEffect(() => {
    setInputData({
      name: curItem.name,
      desc: curItem.desc,
      num: curItem.num,
      isPurchased: curItem.isPurchased,
    });
  }, [curItem]);

  const updateItemHandler = (event) => {
    event.preventDefault();

    const { name, desc, num, isPurchased } = inputData;

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

  const valueChangeHandler = (event) => {
    const type = event.target.name;
    const value = event.target.value;
    setInputData({ ...inputData, [type]: value });
  };

  const togglePurchased = () => {
    setInputData({ ...inputData, isPurchased: !inputData.isPurchased });
  };

  return (
    <EditModal>
      <ModalHeader />
      <BodyWrapper>
        <Title>Edit an Item</Title>
        <Subtitle>Edit your item below</Subtitle>
        <FormWrapper ref={inputForm}>
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
          <TextWrapper>
            <PurchaseCheckBox
              type="checkbox"
              checked={inputData["isPurchased"]}
              onClick={togglePurchased}
            />
            <PurchasedText>Purchased</PurchasedText>
          </TextWrapper>
        </FormWrapper>
      </BodyWrapper>
      <ConfirmButtons
        handleClick={updateItemHandler}
        buttonText={"Save Item"}
      />
    </EditModal>
  );
};

export default EditItemModal;
