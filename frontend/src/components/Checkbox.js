import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { crossItem } from "../redux/list/action";

const CheckboxContainer = styled.div`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxInput = styled.input`
  height: 1.4rem;
  width: 1.4rem;
  cursor: pointer;
  accent-color: var(--checkbox-filled);
`;

const Checkbox = ({ isChecked, id }) => {
  const dispatch = useDispatch();
  
  const toggleSelection = () => {
    dispatch(crossItem(id));
  };
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onClick={toggleSelection}
      />
    </CheckboxContainer>
  );
};

export default Checkbox;
