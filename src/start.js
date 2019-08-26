
import { Button } from 'reactstrap';
import React, { Component } from 'react';

class Nosbtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      
    }
  }

  
    
  render() {
    return (

      <div>
        <Button onClick={this.props.handlerInc } outline color="primary">Start</Button>
     
        <Button className="leftbtn" onClick={this.props.handlerPose} outline color="warning">Pause </Button>

        <Button className="btn" onClick={this.props.handlerReset} outline color="danger">Reset </Button>
      </div>
    );
  }
}
export default Nosbtn;