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
        numChildrenExp: 0,
        numChildrenEdu: 0,
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
    console.log(e.target.value);
    console.log(e.target.className);
    console.log()
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
    e.preventDefault();
    this.setState(state => { //sets number of extra exp there should be 
      state.other.numChildrenExp = state.other.numChildrenExp + 0.5; //it adds twice every button press (idk why), so i improvised with 0.5 to add 1 on each button press 
      if (state.other.numChildrenExp % 1 === 0) {
        let x = 'exp' + state.other.numChildrenExp; 
        state[x] = {
          company: '',
          position: '',
          expCity: '',
          expStart: '',
          expCurrent: '',
          expEnd: '',
          description: '', 
        }
      }
      return state;
    })
  }

  handleAddEduBtnClick = (e) => {
    e.preventDefault();
    this.setState(state => { //sets number of extra exp there should be 
      state.other.numChildrenEdu = state.other.numChildrenEdu + 0.5; //it adds twice every button press (idk why), so i improvised with 0.5 to add 1 on each button press 
      if (state.other.numChildrenEdu % 1 === 0) {
        let x = 'edu' + state.other.numChildrenEdu; 
        state[x] = {
          university: '',
          eduCity: '',
          eduStart: '',
          eduEnd: '',
          degree: '',
          subject: '',
        }
      }
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
          onAddEdu = {this.handleAddEduBtnClick}
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
