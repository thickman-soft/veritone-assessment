import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllItems } from "./redux/list/action";
import { getIsModalOpen, getIsWaiting } from "./redux/selector";

import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import ModalContainer from "./modals/ModalContainer";
import SpinnerContainer from "./modals/SpinnerContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);
  const isWaiting = useSelector(getIsWaiting);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <Container>
      <Header />
      <ListContainer />
      {(isModalOpen) && <ModalContainer />}
      {isWaiting && <SpinnerContainer />}
    </Container>
  );
}

export default App;
