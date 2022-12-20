import React from 'react';
import styled from 'styled-components';

const ControlIcons = styled.div`
  flex: 0 1 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  i {
    cursor: pointer;
    color: var(--control-icons);
    transition: 200ms;
  }

  i:hover {
    color: black;
  }

  i:active {
    color: var(--button-secondary-active);
  }
`;

const Controls = ({ ele }) => {
  return (
    <ControlIcons>
      <i className='material-icons'>
        edit
      </i>
      <i className='material-icons'>
        delete
      </i>
    </ControlIcons>
  );
};

export default Controls;
