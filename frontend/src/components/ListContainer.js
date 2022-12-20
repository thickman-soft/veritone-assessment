import React, { useState } from "react";
import styled from "styled-components";

import EmptyList from "./EmptyList";

import itemList from "../mock";
import ItemList from "./ItemList";

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-height: -webkit-fill-available;
  overflow-y: scroll;
`;

const ListContainer = () => {
  const [shoppingList, setShoppingList] = useState(itemList);

  return (
    <BodyContainer>
      {shoppingList.length === 0 ? (
        <EmptyList />
      ) : (
        <ItemList shoppingList={shoppingList} />
      )}
    </BodyContainer>
  );
};

export default ListContainer;
