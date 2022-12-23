import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Button from "./Button";
import ListItem from "./ListItem";

import { openAddModal } from "../redux/modal/action";

const ListWrapper = styled.div`
  align-self: flex-start;
  width: 70%;
  margin-top: 2rem;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  margin-bottom: -1rem;
`;

const ListTitle = styled.h4`
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
`;

const ItemList = ({ shoppingList }) => {
  const dispatch = useDispatch();
  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>Your Items</ListTitle>
        <Button onClick={() => dispatch(openAddModal())}>Add Item</Button>
      </ListHeader>
      {Object.keys(shoppingList).map((id) => {
        return <ListItem item={shoppingList[id]} key={id} />;
      })}
    </ListWrapper>
  );
};

export default ItemList;
