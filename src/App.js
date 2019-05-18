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

  componentDidMount() {
    const self = this;
    // fetch('http://localhost:3001/payments')
    //   .then(function(resp) { return resp.json() })
    //   .then(function(data) {
    //     self.props.dispatch({
    //       type: 'UPDATE_TOTAL_DONATE',
    //       amount: summaryDonations(data.map((item) => (item.amount))),
    //     });
    //   })
  }

  render() {
    const self = this;
    const cards = this.props.charities.map(function(item, i) {
      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <label key={j}>
          <input
            type="radio"
            name={`payment-${item.id}`}
          /> {amount}
        </label>
      ));

      return (
        <Card key={i}>
          <p>{item.name}</p>
          {payments}
          <button 
            onClick={() => {
              self.props.handlePay(1, 100, 'THB');
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
    const message = this.state.message;

    return (
      <div>
        <h1>Tamboon React</h1>
        <p>All donations: {donate}</p>
        <p style={style}>{message}</p>
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