# learn-react-countdownchamp

[index](index.md)

## Branch 5-first-change-state

### Creating first react change state in index.jsx _file_
```ruby
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
The golden rule of React: never mutate state directly. I can’t repeat this enough. In order to change your state data, you can’t manipulate it like you would with normal variables. 
For example, something like `x++` or `counter += 1` would be fine in any other case. 
But in order to update state, you must use the setState() function and have new instances of data.
```ruby
changeDeadline(){
    this.state.deadline = 'December 26, 2018' //wrong way
}
```
### Instead of using react setState method
```ruby
changeDeadline(){
    this.setState({deadline: 'December 26, 2018'}) // right way
}
```

### You must never call method using the normal notation
```ruby
onClick={this.changeDeadline() } // wrong way
```
### Instead of use always ES6 anonymous function because of the method will called just once without causing loop to crash the apllication 
```ruby
onClick={ () => this.changeDeadline() } // right way
```
