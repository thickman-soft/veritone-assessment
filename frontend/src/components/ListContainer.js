import React, { useState } from "react";
import styled from "styled-components";

import EmptyList from "./EmptyList";

const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContainer = () => {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <BodyContainer>{shoppingList.length === 0 && <EmptyList />}</BodyContainer>
  );
};

export default ListContainer;
