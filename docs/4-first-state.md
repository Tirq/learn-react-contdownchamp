# learn-react-countdownchamp

## Branch 4-first-state

### Creating first react state in index.jsx _file_
```
//there is some code up...
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2018'
        }
    }

    render () { 
        return (
            <div className="App">
                <div className="App-title">
                    Contdown to {this.state.deadline}
                </div>
            <div>
//there is some code down...
```