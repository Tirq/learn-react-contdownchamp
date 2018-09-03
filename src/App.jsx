import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render () { 
        return (
            <div className="App">
                <div className="App-title">
                    Contdown to that day by Tirq!
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
                    <input placeholder="next date" />
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;