import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        }
    }
    
    changeDeadline(){
        this.setState({deadline: this.state.newDeadline});
    }

    render () { 
        return (
            <div className="App">
                <div className="App-title">
                    Contdown to {this.state.deadline}
                </div>
                <div>
                    <div className="Clock-days">
                        14 days
                    </div>
                    <div className="Clock-hours">
                        10 hours
                    </div>
                    <div className="Clock-minutes">
                        15 minutes
                    </div>
                    <div className="Clock-seconds">
                        20 seconds
                    </div>
                </div>
                <div>
                    <input
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        placeholder='next date' />
                    <button onClick={() => this.changeDeadline()} >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;