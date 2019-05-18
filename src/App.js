import React, { Component } from 'react';
import styled from 'styled-components';

import * as donationsActions from './actions/donationsActions'; 

import Message from './components/Message';
import Donate from './components/Donate';

const Container = styled.div`
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1180px;
  * {
    box-sizing: border-box;
  }
  h1 {
    color: #5a617d;
    text-align: center;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Message />
        <h1>Omise Tamboon React</h1>
        <Donate/>
      </Container>
    );
  }
}

export default App;