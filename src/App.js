import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
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
        descriptionChildren: 0,
        description: [], 
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

  handleDescriptionChange = (e) => {
    this.setState(state => {
      const x = e.target.parentNode.parentNode.parentNode.firstChild.id;
      state[x].description[e.target.className]= e.target.value
      return state;
    })
  }

  handleAddJobPointBtnClick = (e) => {
    e.preventDefault();
    this.setState(state => {
      const x = e.target.parentNode.parentNode.firstChild.id;
      state[x].descriptionChildren += 0.5;
      return state;
    })
    const x = e.target.parentNode.parentNode.firstChild.id;
    console.log(x)
  }

  handleAddExpBtnClick = () => {
    const state = this.state;
    state.other.numChildrenExp += 1;
    let x = 'exp' + state.other.numChildrenExp;
    state[x] = {
      company: '',
      position: '',
      expCity: '',
      expStart: '',
      expCurrent: '',
      expEnd: '',
      descriptionChildren: 0,
      description: [], 
    }
    this.setState(state);
  }
  // this.setState(state => { //this version is accessed twice? idk but this works 
    //   state.other.numChildrenExp = state.other.numChildrenExp + 0.5; //it adds twice every button press (idk why), so i improvised with 0.5 to add 1 on each button press 
    //   if (state.other.numChildrenExp % 1 === 0) {
    //     let x = 'exp' + state.other.numChildrenExp; 
    //     state[x] = {
    //       company: '',
    //       position: '',
    //       expCity: '',
    //       expStart: '',
    //       expCurrent: '',
    //       expEnd: '',
    //       descriptionChildren: 0,
    //       description: [], 
    //     }
    //   }
    //   return state;
    // })


  // handleDeleteSection = () => {
  //   //give button id = 'section's name' 
  //   const section = e.target.id;

  //   this.setState(prevState => {

  //   })
  // }

  handleDeleteExpBtnClick = () => {
    const state = this.state;
    let x = 'exp' + state.other.numChildrenExp;
    delete state[x];
    if (state.other.numChildrenExp > 0) {
      state.other.numChildrenExp -= 1;
    }
    this.setState(state);
  }

  handleAddEduBtnClick = () => {
    const state = this.state;
    state.other.numChildrenEdu += 1;
    let x = 'edu' + state.other.numChildrenEdu;
    state[x] = {
        university: '',
        eduCity: '',
        eduStart: '',
        eduEnd: '',
        degree: '',
        subject: '',
    }
    this.setState(state);  
  }

  // handleDeleteEduBtnClick = () => {
  //   this.setState(prevState => {
  //     const state = {...prevState}
  //     let x = 'edu' + state.other.numChildrenEdu;
  //     console.log(x)
  //     delete state[x];
  //     if (state.other.numChildrenEdu > 0){
  //       state.other.numChildrenEdu -= 0.5;
  //     }
  //     return state;
  //   })
  // } 

  handleDeleteEduBtnClick = () => {
    const state = this.state;
    let x = 'edu' + state.other.numChildrenEdu;
    delete state[x];
    if (state.other.numChildrenEdu > 0){
      state.other.numChildrenEdu -= 1;
    }
    this.setState(state);
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
          onDescriptionChange = {this.handleDescriptionChange}
          onJobClick = {this.handleAddJobPointBtnClick}
          onAddExp = {this.handleAddExpBtnClick}
          onDeleteExp = {this.handleDeleteExpBtnClick}
          onAddEdu = {this.handleAddEduBtnClick}
          onDeleteEdu = {this.handleDeleteEduBtnClick}
          data = {this.state}
        />
        <ReactToPrint
          trigger={() => {
            return <button id='submit'>Submit to printer</button>;
          }}
          content={() => this.componentRef}
        />
        
        <Preview
          data = {this.state}
          ref={el => (this.componentRef = el)}
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
