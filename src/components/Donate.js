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
class Donate extends React.Component {
  render() {
    return (
      <div>
        <DonationInfo>All donations: {this.props.donate} </DonationInfo>
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

const mapStateToProps = (state) => ({
  charities: state.charities,
  donate: state.donate,
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  handlePay: (id, amount, currency) => {
    dispatch(donateActions.payDonate(id, amount, currency))
  },
  updateMessage: (message) => {
    dispatch(messageActions.updateMessage(message))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Donate);