# learn-react-countdownchamp

## Branch 5-first-change-state

### Creating first react change state in index.jsx _file_
```
//there is some code up...
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2018'
        }
    }
    changeDeadline(){ //new
        this.setState({deadline: 'December 26, 2018'})
    }

    render () { 
    //there is some code up...
    <button onClick={ () => this.changeDeadline() } > //new
        Submit
    </button>
//there is some code down...
```

### You must never mutate or change state direcly
```
changeDeadline(){
    this.state.deadline = 'December 26, 2018' //wrong way
}
```
### Instead of using react setState method
```
changeDeadline(){
    this.setState({deadline: 'December 26, 2018'}) // right way
}
```

### You must never call method using the normal notation
```
onClick={this.changeDeadline() } // wrong way
```
### Instead of use always ES6 anonymous function because of the method will called just once without causing loop to crash the apllication 
```
onClick={ () => this.changeDeadline() } // right way
```
