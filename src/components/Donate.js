import React from 'react';
import  { connect } from 'react-redux';
import styled from 'styled-components';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      selectedAmount: 10,
    }
  }
  render() {
    const cards = this.props.charities.map(function(item, i) {
      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <label key={j}>
          <input
            type="radio"
            name="payment"
            onClick={function() {
              trhis.setState({ selectedAmount: amount })
            }} /> {amount}
        </label>
      ));
  
      return (
        <Card key={i}>
          <p>{item.name}</p>
          {payments}
          <button onClick={handlePay.call(this, item.id, this.state.selectedAmount, item.currency)}>Pay</button>
        </Card>
      );
    });
    return (
      <div>
        <p>All donations: 0</p>
        {cards}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    charities: state.charities,
    donate: state.donate,
  }
}
  
export default connect(mapStateToProps)(Donate);

function handlePay(id, amount, currency) {
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) { return resp.json(); })
      .then(function() {
        this.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        this.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });
  
        setTimeout(function() {
          this.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      });
  }
}
  