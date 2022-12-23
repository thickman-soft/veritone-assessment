import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ItemList from "./ItemList";
import EmptyList from "./EmptyList";

import { getShoppingList } from "../redux/selector";

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-height: -webkit-fill-available;
  overflow-y: scroll;
`;

const ListContainer = () => {
  const shoppingList = useSelector(getShoppingList);

  return (
    <BodyContainer>
      {!Object.keys(shoppingList).length ? (
        <EmptyList />
      ) : (
        <ItemList shoppingList={shoppingList} />
      )}
    </BodyContainer>
  );
};

export default ListContainer;
