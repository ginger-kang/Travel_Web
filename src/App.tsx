import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./global-styles";

const AppContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  );
}

export default App;
