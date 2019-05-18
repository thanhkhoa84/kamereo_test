import React from 'react';
import styled from 'styled-components';

const DonatePanelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  text-align: center;
  p {
    text-align: center;
    font-weight: bold;
    margin: 0 0 1em 0;
  }
  label {
    display: block
  }
`;

const DonatePanelContent = styled.div`
  font-size: 14px;
  padding: 10px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  @media(min-width: 768px) {
    font-size: 18px;
  }
`;

const CloseButton = styled.a`
  background: transparent;
  color: #606b7d;
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10; 
`;

const LabelContainer = styled.div`
  text-align: center;
  margin-bottom: 1em;
  label {
    display: inline-block;
    margin: 0 3px;
    vertical-align: top;
  }
`;

class DonatePanel extends React.Component {
  constructor(props) {
    super(props);
    this.setSelectedAmount = this.setSelectedAmount.bind(this)

    this.state = {
      selectedAmount: 10,
    }
  }

  setSelectedAmount(e) {
    this.setState({
      selectedAmount: +e.target.value,
    })
  }

  render() {
    const self = this;
    const { item } = this.props;
    const { id, currency} = item;

    const payments = [10, 20, 50, 100, 500].map((amount, i) => {
      return (
        <label key={i} >
          <input
            type="radio"
            name={`payment-${id}`}
            value={amount}
            checked={self.state.selectedAmount === +amount}
            onChange={self.setSelectedAmount}
          /> {amount}
        </label>
      )
    });    

    return (
      <DonatePanelContainer>
        <CloseButton onClick={this.props.showDonatePanel}>X</CloseButton>
        <DonatePanelContent>
          <p>Select the amount to donate (USD)</p>
          <LabelContainer>{payments}</LabelContainer>
          <button 
            onClick={() => {
              this.props.handlePay(id, this.state.selectedAmount, currency)}
            }
          >
            Pay
          </button>
        </DonatePanelContent>
      </DonatePanelContainer>
    )
  }
}

export default DonatePanel;