import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./global-styles";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
