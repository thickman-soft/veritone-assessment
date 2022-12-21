import React, { useEffect } from "react";
import styled from "styled-components";
import ListContainer from "./components/ListContainer";
import Header from "./components/Header";
import ModalContainer from "./modals/ModalContainer";
import { useSelector } from "react-redux";

import { addItem, editItem, fetchAllItems } from "./api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  useEffect(() => {
  }, [])
  return (
    <Container>
      <Header />
      <ListContainer />
      {isModalOpen && <ModalContainer />}
    </Container>
  );
}

export default App;
