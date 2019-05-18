import React, { Component } from 'react';
import  { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from './helpers';
import * as donationsActions from './actions/donationsActions'; 

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

    this.state = {
      message: '',
      selectedAmount: 10,
    }
  }

  render() {
    return (
      <Container>
        <h1>Omise Tamboon React</h1>
        <Donate
          charities={this.state.charities}
        />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    charities: state.charities,
    donate: state.donate,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handlePay: (id, amount, currency) => {
      dispatch(donationsActions.payDonate(id, amount, currency))
    },
  }
}''

export default connect(mapStateToProps, mapDispatchToProps)(App);