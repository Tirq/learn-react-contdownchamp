# learn-react-countdownchamp

[index](index.md)

## Branch 1-first-example 
### Creating the project 

Command to create a React project. Before to start its necessary have installed Node and NPM.
```ruby 
create-react-app countdownchamp
```
### Removing src folder
Remove the default generated code. 
```ruby
cd countdownchamp
rm src/*
cd src/
touch index.js
```
### Creating first js page _index.js file_

Creating the main Javascript file who will have call from another pages. The Javascript file contains two imports, the first is about the enable react and the second is to enable the functionality to manipulate the page DOM used in the _render_ method.

```ruby
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        contdown champ following Udemy course named react-js-and-redux-mastering-web-apps by Tirq!
    </div>, document.getElementById('root')
);
```
