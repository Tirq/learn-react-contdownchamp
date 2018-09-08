# learn-react-countdownchamp

[index](index.md)

## Branch 6-interactive-change-state

### Creating first interactive content using new variable named newDeadline to receive content typed in input field in index.jsx _file_
```ruby
//there is some code up...
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: '' //new 
        }
    }
    changeDeadline(){ 
        this.setState({deadline: this.state.newDeadline}); //new
    }

    render () { 
    //there is some code up...
    <input 
        onChange={event => this.setState({newDeadline: event.target.value})} //new 
        placeholder='next date' />
//there is some code down...
```