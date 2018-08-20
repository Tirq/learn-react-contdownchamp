# learn-react-contdownchamp

## Branch 1-first-example 
### Creating the project 
``` 
create-react-app countdownchamp
```
### removing src folder
```
cd countdownchamp
rm src/*
cd src/
touch index.js
```

_index.js file_
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        contdown champ following Udemy course named react-js-and-redux-mastering-web-apps by Tirq! ;)
    </div>, document.getElementById('root')
);
```