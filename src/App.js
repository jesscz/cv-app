import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <header>Resume Creator</header>
        <Form/>
        <footer><a href='https://github.com/jesscz'>Copyright ©  2023 jesscz</a></footer>
      </div>
    );
  }
}

export default App;
