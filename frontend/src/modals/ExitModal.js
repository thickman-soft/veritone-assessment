import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { closeModal } from "../redux/modal/action";

const Icon = styled.i`
  padding: 0rem 1.5rem;
  color: var(--control-icons);
  cursor: pointer;
  transition: 100ms;

  &:hover {
    color: black;
    transition: 100ms;
  }

  &:active {
    color: var(--button-secondary-active);
    transition: 100ms;
  }
`;

const ExitModal = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <Icon className="material-icons" onClick={handleClick}>
      last_page
    </Icon>
  );
};

export default ExitModal;
