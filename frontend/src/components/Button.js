import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--button-primary);
  color: white;
  border: none;
  border-radius: 0.2rem;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    background-color: var(--button-primary-hover);
  }

  &:active {
    background-color: var(--button-primary-active);
  }
`;

const Button = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
