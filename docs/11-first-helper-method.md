# learn-react-countdownchamp

[index](index.md)

## Branch 11-first-helper-method

### Helper method

It was Created a method to leading zeros on results. 

 _Clock.jsx_
```ruby
#there is some code up...
   leadingZero(num){ //new
       return num < 10 ? '0' + num : num;
   }

    getTimeUntil(deadline){ 
#there is some code down...

#there is some code up...
<div className="Clock-days">
    {this.leadingZero(this.state.days)} days //new
</div>
```
