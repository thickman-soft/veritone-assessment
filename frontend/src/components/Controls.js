import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openDeleteModal } from '../redux/modal/action';

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

const Controls = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = (event) => {
    dispatch(openDeleteModal(item.id));
  }
  return (
    <ControlIcons>
      <i className='material-icons'>
        edit
      </i>
      <i className='material-icons' onClick={deleteItem}>
        delete
      </i>
    </ControlIcons>
  );
};

export default Controls;
