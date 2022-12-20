import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";
import CrossedItem from "./CrossedItem";
import Button from "./Button";

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
  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>Your Items</ListTitle>
        <Button>Add Item</Button>
      </ListHeader>
      {shoppingList.map((item, ind) => {
        return item.isChecked ? (
          <CrossedItem item={item} ind={ind} key={ind} />
        ) : (
          <ListItem item={item} ind={ind} key={ind} />
        );
      })}
    </ListWrapper>
  );
};

export default ItemList;
