import React, { useEffect } from "react";
import styled from "styled-components";
import ListContainer from "./components/ListContainer";
import Header from "./components/Header";
import ModalContainer from "./modals/ModalContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "./redux/list/action";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  useEffect(() => {
    dispatch(fetchAllItems());
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
