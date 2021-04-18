import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Button } from './common';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Test</Button>
    </>
  );
}

export default App;
