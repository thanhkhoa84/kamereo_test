import React, { Component } from 'react';
import  { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from './helpers';
import * as donationsActions from './actions/donationsActions'; 

import Donate from './components/Donate';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
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
    const self = this;
    const cards = this.props.charities.map(function(item, i) {
      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <label key={j}>
          <input
            type="radio"
            name={`payment-${item.id}`}
            onChange={() => {
              self.setState({
                selectedAmount: amount,
              })
            }}
          /> {amount}
        </label>
      ));

      return (
        <Card key={i}>
          <p>{item.name}</p>
          {payments}
          <button 
            onClick={() => {
              self.props.handlePay(item.id, self.state.selectedAmount, item.currency);
            }}
          >Pay</button>
        </Card>
      );
    });

    const style = {
      color: 'red',
      margin: '1em 0',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
    };
    const donate = this.props.donate;

    return (
      <div>
        <h1>Tamboon React</h1>
        <p>All donations: {donate}</p>
        {cards}
      </div>
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