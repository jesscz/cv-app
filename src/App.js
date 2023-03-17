import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor() {
    super();

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);

    this.state = {
      other : {
        numChildren: 0,
      },
      personalInfo : {
        firstName: '',
        lastName: '',
        photoId: null,
        email: '',
        phoneNumber: '',
        address: '',
      },
      experience : {
        company: '',
        position: '',
        expCity: '',
        expStart: '',
        expCurrent: '',
        expEnd: '',
        description: '',
      },
      education : {
        university: '',
        eduCity: '',
        eduStart: '',
        eduEnd: '',
        degree: '',
        subject: '',
      } 
    };
  }
  
  handleFormChange = (e) => { //function for changing state when form input changes
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
  
  handlePhotoChange = (e) => { //function for changing photo (in state where its stored)
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState(state => {
        state.personalInfo.photoId = URL.createObjectURL(img)
        return state;
      })
    }
  }

  handleAddExpBtnClick = (e) => {
    this.setState(state => {
      state.other.numChildren = state.other.numChildren + 0.5;
      return state;
    })

  }

  render() {
    return (
      <div className='main'>
        <header>
          Resume Creator
        </header>

        <Form 
          onChange = {this.handleFormChange}
          onPhotoChange = {this.handlePhotoChange}
          onAddExp = {this.handleAddExpBtnClick}
          data = {this.state}
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
