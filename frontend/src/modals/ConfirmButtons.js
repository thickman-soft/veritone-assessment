import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import CancelButton from "../components/CancelButton";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 2rem;
`;

const ConfirmButtons = ({ modal, handleClick, buttonText }) => {
  return (
    <ButtonWrapper>
      <CancelButton modal={modal} />
      <Button onClick={handleClick}>{buttonText}</Button>
    </ButtonWrapper>
  );
};

export default ConfirmButtons;
