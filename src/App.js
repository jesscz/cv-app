import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor() {
    super();

    this.handleFormChange = this.handleFormChange.bind(this);

    this.state = {
      personalInfo : {
        firstName: '',
        lastName: '',
        photoId: '',
        email: '',
        phoneNumber: '',
        address: '',
      },
      experience : {
        position: '',
        company: '',
        expCity: '',
        expStart: '',
        expCurrent: '',
        expEnd: '',
        description: '',
      },
      education : {
        subject: '',
        university: '',
        eduCity: '',
        degree: '',
        eduStart: '',
        eduEnd: '',
      } 
    };
  }
  
  handleFormChange = (e) => {
    this.setState(state => {
      const x = e.target.parentNode.parentNode.firstChild.id;
      if (e.target.id === ''){
        state[x][e.target.className] = e.target.value;
      }
      else{
        state[x][e.target.id] = e.target.value;
      }
      return state;
    })
  };
  
  render() {
    return (
      <div className='main'>
        <header>
          Resume Creator
        </header>

        <Form 
          onChange = {this.handleFormChange}
        />

        <Preview
          data = {this.state}
        />

        <footer>
          <a href='https://github.com/jesscz'>
            Copyright ©  2023 Jessie
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
