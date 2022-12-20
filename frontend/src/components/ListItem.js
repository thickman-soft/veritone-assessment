import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import Controls from "./Controls";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  margin: 1rem 0rem;
  border: 0.1rem solid var(--item-border);
  border-color: ${(props) =>
    props.isChecked ? "transparent" : "var(--item-border)"};
  background-color: ${(props) =>
    props.isChecked ? "var(--item-active)" : "transparent"};
  border-radius: 0.2rem;
  transition: 200ms;

  &:hover {
    border: 0.1rem solid var(--checkbox-filled);
    transition: 200ms;
  }
`;

const Textbox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: "Nunito", sans-serif;
  }
`;

const ItemName = styled.p`
  font-size: 1.1rem;
  margin: 0;

  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => (props.isChecked ? "var(--checkbox-filled)" : "black")};
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  margin: 0.1rem 0rem;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: var(--item-desc);
`;

const ListItem = ({item}) => {
  const { name, desc, isPurchased, count } = item;

  return (
    <ItemWrapper isChecked={isPurchased}>
      <Checkbox isChecked={isPurchased} />
      <Textbox>
        <ItemName isChecked={isPurchased}>{name}</ItemName>
        <ItemDesc isChecked={isPurchased}>{desc}</ItemDesc>
      </Textbox>
      <Controls ele={item} />
    </ItemWrapper>
  );
};

export default ListItem;
