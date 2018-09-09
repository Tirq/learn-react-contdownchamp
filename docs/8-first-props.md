# learn-react-countdownchamp

[index](index.md)

## Branch 8-first-props

### Using props to send data or state between components
At this case the deadline from App component will be send to its child Click component. 

 _App.jsx_
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
#there
 is some code down...
```

_Clock.jsx_
```ruby
#there is some code up...
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 10,
            hours: 5,
            minutes: 0,
            seconds: 0        
        }
        console.log('this.props', this.props ); //new 
    }
#there is some code down...
```