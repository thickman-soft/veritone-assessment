import React from "react";
import styled from "styled-components";

const Dropdown = styled.select`
  margin: 0rem 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: "Nunito", sans-serif;
  width: 87.5%;
  border: 0.1rem solid var(--modal-inputs);
  color: var(--modal-placeholders);
`;

const numOptions = 5;

const ItemNumber = ({ placeholder, text }) => {
  return placeholder ? (
    <Dropdown defaultValue={placeholder}>
      <option disabled hidden>
        {placeholder}
      </option>
      {new Array(numOptions).fill(0).map((cur, ind) => (
        <option key={ind}>{ind}</option>
      ))}
    </Dropdown>
  ) : (
    <Dropdown defaultValue={text}>
      {new Array(numOptions).fill(0).map((cur, ind) => (
        <option key={ind}>{ind}</option>
      ))}
    </Dropdown>
  );
};

export default ItemNumber;
