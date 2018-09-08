# learn-react-countdownchamp

[index](index.md)

## Branch 3-first-css

### Creating first CSS App.css _file_
```ruby
cd src/
touch App.css
```
```ruby
.App{
    text-align: center;
    font-size: 35px;
    margin-top: 20%;
}

.App-title{
    font-size: 50px;
}

.Clock-days,
.Clock-hours
.Clock-minutes,
.Clock-seconds {
    display: inline;
    margin: 10px;
}
```

### Using short notation in index.js _file_
```ruby
<App/>
```
instead of longer notation
```ruby
<App></App>
```
### Changing content to index.jsx _file_, a static content from now
```ruby
import React, { Component } from 'react';
import './App.css'; //new

class App extends Component {
    render () { 
        return (
            <div className="App"> //new
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
```