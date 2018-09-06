# learn-react-countdownchamp

## Branch 7-clock-component

### Creating clock component to reduce and split code. 
### Creating first component Clock.jsx file_
```
import React, { Component } from 'react';
import './App.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 10,
            hours: 5,
            minutes: 0,
            seconds: 0        
        }
    }

    render(){
        return(
            <div>
                <div className="Clock-days">
                    {this.state.days} days
                </div>
                <div className="Clock-hours">
                    {this.state.hours} hours
                </div>
                <div className="Clock-minutes">
                    {this.state.minutes} minutes
                </div>
                <div className="Clock-seconds">
                    {this.state.seconds} seconds
                </div>
            </div>
        )
    }
}

export default Clock;
```
### Change App.jsx file_ to use Clock component and remove the div with put in the newest component 
```
//there is some code up...
import Clock from './Clock';
//there is some code down...
render () { 
    //there is some code up...
    <div className="App-title">
        Contdown to {this.state.deadline}
    </div>
    <Clock/> //new
//there is some code down...
```