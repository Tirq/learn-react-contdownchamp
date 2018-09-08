# learn-react-countdownchamp

[index](index.md)

## Branch 8-first-props

### Using props to send data or state between components
At this case the deadline from App component will be send to its child Click component. 
```ruby
#there is some code up...
import Clock from './Clock';
#there is some code down...
render () { 
#there is some code up...
    <div className="App-title">
        Contdown to {this.state.deadline}
    </div>
    <Clock
       deadline={this.state.deadline} /> //new
#there is some code down...
```