import React from 'react';
import styled from 'styled-components';

import DonatePanel from './DonatePanel';

const DonateCardContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #ccc;
  color: #606b7d;
  overflow: hidden;
  display: inline-block;
  margin-bottom: 25px;
  padding-bottom: 50%;
  position: relative;
  width: 100%;
  height: calc((100vw - 20px)*56/100);
  -ms-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  @media(min-width:768px) {
    padding-bottom: 0;
    width: calc((100% - 25px)/2);
    height: calc(56/100*52vw);
    &:nth-child(even) {
      margin-left: 25px;
    }
  }
  @media(min-width:1024px) {
    height: calc(56/100*50vw);
  }
  @media(min-width:1200px) {
    height: calc((1180px - 25px)/2*56/100);
  }
  &:hover {
    box-shadow: none;
  }
  button {
    background: #fff;
    border-radius: 4px;
    color: #1b43ff;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    padding: 0 10px;
    border: 1px solid currentColor;
    height: 34px;
    line-height: 34px;
    transition: all 0.5s;
    &:hover {
      background: #1b43ff;
      color: #fff;
    }
  }
`;

const CharityImage = styled.img`
  max-width: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const DonateInfo = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0; 
  left: 0;
  right: 0;
  padding: 15px;
  h2 {
    font-size: 14px;
    font-weight: normal;
    float: left;
    line-height: 34px;
    margin: 0;
    height: 34px;
  }
  button {
    float: right;
  }
`

class DonateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpening: false,
    }
    this.showDonatePanel = this.showDonatePanel.bind(this);
  }

  showDonatePanel() {
    this.setState({
      isOpening: !this.state.isOpening,
    });
  }

  render() {
    const { charity } = this.props;

    return (
      <DonateCardContainer>
        <CharityImage src={`images/${charity.image}`} />
        <DonateInfo>
          <h2>{charity.name}</h2>
          <button onClick={this.showDonatePanel}>Donate</button>
        </DonateInfo>
        {
          this.state.isOpening &&
          <DonatePanel
            item={charity}
            selectedAmount={this.state.selectedAmount}
            showDonatePanel={this.showDonatePanel}
            handlePay={this.props.handlePay}
          />
        }
      </DonateCardContainer>
    );
  }
}

export default DonateCard;