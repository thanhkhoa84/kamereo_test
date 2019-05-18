import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MessageContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 5px;
  right: 5px;
  width: 18em;
  pointer-events: none;
  @media(min-width:768px) {
    width: 300px;
  }
`;

const MessageDetail = styled.div`
  background: #28a745;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  margin: 0.25em 0;
`;

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
    }
  }
    
  render() {
    return (
      <MessageContainer>
        { this.props.message.map((m, i) => (
          <MessageDetail key={i}>{m}</MessageDetail>
        ))
        }
      </MessageContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    message: state.message,
  }
}
  

export default connect(mapStateToProps)(Message);