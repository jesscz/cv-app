import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <header>
          Resume Creator
        </header>

        <Form/>

        <Preview/>

        <footer>
          <a href='https://github.com/jesscz'>
            Copyright ©  2023 jesscz
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
