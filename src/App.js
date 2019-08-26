import React from 'react';
import './App.css';
import StartAndResetTimer from './start';
// import millisToMinutesAndSeconds from './backround'

function millisToMinutesAndSeconds(millis) {
  var hours = Math.floor(millis / 1000 / 3600)% 24;
  var minutes = Math.floor(millis / 60000)% 60;
  var seconds = parseInt((millis / 1000)%60);
  return {hours,minutes,seconds};
}

let refInterval = [];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      millSecond :1000,
    }
  }
  Reset = () => {
    refInterval.map(el=>clearInterval(el))
  
  this.setState({ millSecond: 0 });
    
    }
    Pause = () => {
      clearInterval(refInterval)
    }
    
  IncrementItem = () => {
    let incremCallBack= ()=>{
      this.setState({ millSecond: this.state.millSecond + 1000 });
    }
    refInterval.push(setInterval(incremCallBack,1000));
   
  }
  
render(){
  let {hours,minutes,seconds} = millisToMinutesAndSeconds(this.state.millSecond);
  hours = hours<10 ? '0'+hours : hours;
 minutes = minutes<10 ? '0'+ minutes : minutes;
 seconds = seconds<10 ? '0' + seconds : seconds;
  return (
    <div className ="App" > 
         <div className="Title"> 
         
        <h2>{` ${hours} : ${minutes} : ${seconds}`} </h2>
        <label>Hour </label>
        <label>Minute </label>
        <label>seconds</label>
      </div>
<StartAndResetTimer handlerReset={this.Reset} handlerInc= {this.IncrementItem} handlerPose={this.Pause}/>

    </div> 
  );
}
  
}

export default App;
