# learn-react-countdownchamp

[index](index.md)

## Branch 2-first-component

### Creating first component App.jsx file_

It is a good pattern keep all files with only one responsability and little as soon as possible. To easily that, React have the components.

```ruby
cd src/
touch App.jsx
```
```ruby
import React, { Component } from 'react';

class App extends Component {
    render () { 
        return (
            <div>
                contdown champ following Udemy course named react-js-and-redux-mastering-web-apps by Tirq!
            </div>
        )
    }
}

export default App;
```
### Replacing static div _index.js file_ to  use _App.jsx file_
```ruby
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
    <App></App>, document.getElementById('root')
);
```
