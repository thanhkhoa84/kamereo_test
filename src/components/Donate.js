import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import DonateCard from './DonateCard';

import * as donateActions from '../actions/donationsActions';
import * as messageActions from '../actions/messageActions';

const DonationInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1em;
`;

const DonateMessage = styled.div`
  background: #28a745;
  color: #fff;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px 0;
`;

class Donate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DonationInfo>All donations: {this.props.donate} </DonationInfo> 
        { this.props.message.map((m, i) => (
          <DonateMessage key={i}>{m}</DonateMessage>
        ))
        }
        <div>
          {this.props.charities.map((item, i) => {
            return (
              <DonateCard 
                key={i} 
                charity={item}
                handlePay={this.props.handlePay}
                updateMessage={this.props.updateMessage}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    charities: state.charities,
    donate: state.donate,
    message: state.message,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handlePay: (id, amount, currency) => {
      dispatch(donateActions.payDonate(id, amount, currency))
    },
    updateMessage: (message) => {
      dispatch(messageActions.updateMessage(message))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donate);