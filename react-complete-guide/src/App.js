import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   render() {
           return (
          <div className="App">
            <h1>Hi, I'm React App</h1>
            <p>This is really working!</p>
            <Person name ="Max" age="12"/>
            <Person name ="Menu" age="41">My Hobbies: Racing</Person>
            <Person name ="Sam" age="32"/>
          </div>
           );

     // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!'));
   }
}

export default App;
