import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./global-styles";

const AppContainer = styled.section`
  width: 100%;
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
