# learn-react-countdownchamp

[index](index.md)

## Branch 12-add-bootstrap-css

### Bootstrap CSS

Command to enable bootstrap css from https://react-bootstrap.github.io/

```ruby
npm install --save react react-dom
npm install --save react-bootstrap
```

Add link in _index.html_ in the head section.

```ruby
<link rel="stylesheet" 
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
crossorigin="anonymous">
```

## Enable Bootstrap Css to _App.jsx_ page

Add import 
```ruby
import { Form, FormControl, Button } from 'react-bootstrap' 
```

Change html to specific Bootstrap components
Before bootstrap
```ruby
 <div>
    <input
        onChange={event => this.setState({newDeadline: event.target.value})}
        placeholder='next date' />
    <button 
        onClick={() => this.changeDeadline()} >
        Submit
    </button>
</div>
```
After Bootstrap
```ruby
 <Form inline>
    <FormControl
        className="Deadline-input"
        onChange={event => this.setState({newDeadline: event.target.value})}
        placeholder='next date' />
    <Button 
        onClick={() => this.changeDeadline()} >
        Submit
    </Button>
</Form>
```
Add new class to _App.css_ page
```ruby
.Deadline-input{
    font-size: 25px;
    margin: 5px;
}
```