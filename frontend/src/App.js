import React from "react";
import styled from "styled-components";
import ListContainer from "./components/ListContainer";
import Header from "./components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <ListContainer />
    </Container>
  );
}

export default App;
