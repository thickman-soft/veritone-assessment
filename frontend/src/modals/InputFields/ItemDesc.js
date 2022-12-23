import React from "react";
import styled from "styled-components";

const ItemDesc = styled.textarea`
  margin: 1rem 1.5rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: "Nunito", sans-serif;
  width: 80%;
  height: 20%;
  border: 0.1rem solid var(--modal-inputs);
  resize: none;

  ::placeholder {
    color: var(--modal-placeholders);
  }
`;

export default ItemDesc;
