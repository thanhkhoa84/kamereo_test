import React from 'react';
import { connect } from 'react-redux';

import DonateCard from './DonateCard';

import * as donateActions from '../actions/donationsActions';

class Donate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>All donations: {this.props.donate}</p> 
        {this.props.charities.map((item, i) => {
          return (
            <DonateCard 
              key={i} 
              charity={item}
              handlePay={this.props.handlePay}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    charities: state.charities,
    donate: state.donate,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handlePay: (id, amount, currency) => {
      dispatch(donateActions.payDonate(id, amount, currency))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donate);