# learn-react-countdownchamp

[index](index.md)

## Branch 9-calculate-time

### Calculate time with the time received. 

It was created a function to calculate the time between the date received and the current date. This new function is called in the render function, but it works just because is only showing at the console. If instead to write at the console, try to change the value from the data (setState funtion), an error will be thrown(infinity loop).

 _Clock.jsx_
```ruby
#there is some code up...
    getTimeUntil(deadline){ //new
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        console.log('seconds',seconds,'minutes',minutes,'hours',hours,'days', days);
        //this.setState({days: days}); //will not work.
    }

     render(){
        this.getTimeUntil(this.props.deadline);//new 
#there is some code down...
```