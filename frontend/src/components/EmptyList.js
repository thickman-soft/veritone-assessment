import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { openAddModal } from "../redux/modal/action";

import Button from "./Button";

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10%;
  width: 40rem;
  height: 20rem;
  border: 0.1rem solid #c6c6c6;
  border-radius: 0.3rem;
`;

const EmptyMessage = styled.p`
  margin-top: 7rem;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: var(--menu-border);
`;

const EmptyList = () => {
  const dispatch = useDispatch();
  return (
    <EmptyWrapper>
      <EmptyMessage>Your shopping list is empty :(</EmptyMessage>
      <Button onClick={() => dispatch(openAddModal())}>Add your first item</Button>
    </EmptyWrapper>
  );
};

export default EmptyList;
