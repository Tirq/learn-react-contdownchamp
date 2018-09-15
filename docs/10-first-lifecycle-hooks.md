# learn-react-countdownchamp

[index](index.md)

## Branch 10-first-lifecycle-hooks

### Update state using lifecycle hooks. 

React have some hooks to do some actions, for example, update components before or after some lifecycle. So, it was created two new functions, first the fuction who responsible to change the date.  

 _Clock.jsx_
```ruby
#there is some code up...

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    getTimeUntil(deadline){ 
        #there is some code up...
        this.setState({days: days}); //new
        //also can be hidden when both are the same name `this.setState({days});`
    }

     render(){
       // this.getTimeUntil(this.props.deadline);//delete this line
#there is some code down...
```

In EcmaScript6, when both names are the same, a short way to declare can be used.
```ruby
this.setState({days,hours,minutes,seconds}); //short
```
```ruby
this.setState({days: days,hours: hours,minutes: minutes,seconds: seconds}); //explained
```

Then the second method is to update the page in each second. 
```ruby
#there is some code up...

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000 );
        this.getTimeUntil(this.props.deadline);
    }

    render(){
#there is some code down...
```

