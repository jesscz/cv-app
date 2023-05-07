import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';
import './css/App.css';
import Form from './components/Form';
import Preview from './components/Preview';

function App() {

  const [state, setState] = useState({
    other: {
      numChildrenExp: 0,
      numChildrenEdu: 0,
    },
    personalInfo: {
      firstName: '',
      lastName: '',
      photoId: null,
      email: '',
      phoneNumber: '',
      address: '',
    },
    experience: {
      company: '',
      position: '',
      expCity: '',
      expStart: '',
      expCurrent: '',
      expEnd: '',
      descriptionChildren: 0,
      description: [], 
    },
    education: {
      university: '',
      eduCity: '',
      eduStart: '',
      eduEnd: '',
      degree: '',
      subject: '',
    }
  })
  
  const handleFormChange = (e) => { //function for changing state when form input changes
    const x = e.target.parentNode.parentNode.firstChild.id;
    setState({
      ...state,
      [x]: {
        ...state[x],
        [e.target.className]: e.target.value
      }
    })
  }; 

  const handlePhotoChange = (e) => { //function for changing photo (in state where its stored)
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setState({
        ...state,
        personalInfo: {
          ...state.personalInfo,
          photoId: URL.createObjectURL(img),
        }
      })
    }
  };
  
  const handleDescriptionChange = (e) => { 
    setState(state => {
      const x = e.target.parentNode.parentNode.parentNode.firstChild.id;
      state[x].description[e.target.className]= e.target.value
      return state;
    })
  }

  const handleAddJobPointBtnClick = (e) => {
    e.preventDefault();
    setState(state => {
      const x = e.target.parentNode.parentNode.firstChild.id;
      state[x].descriptionChildren += 0.5;
      return state;
    })
    const x = e.target.parentNode.parentNode.firstChild.id;
    console.log(x)
  }

  const handleAddExpBtnClick = () => {
    const tempState = state;
    tempState.other.numChildrenExp += 1;
    let x = 'exp' + tempState.other.numChildrenExp;
    tempState[x] = {
      company: '',
      position: '',
      expCity: '',
      expStart: '',
      expCurrent: '',
      expEnd: '',
      descriptionChildren: 0,
      description: [], 
    }
    setState(tempState);
  }
  // setState(state => { //this version is accessed twice? idk but this works 
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


  // const handleDeleteSection = () => {
  //   //give button id = 'section's name' 
  //   const section = e.target.id;

  //   setState(prevState => {

  //   })
  // }

  const handleDeleteExpBtnClick = () => {
    const tempState = state;
    let x = 'exp' + tempState.other.numChildrenExp;
    delete tempState[x];
    if (tempState.other.numChildrenExp > 0) {
      tempState.other.numChildrenExp -= 1;
    }
    setState(tempState);
  }

  const handleAddEduBtnClick = () => {
    const tempState = state;
    tempState.other.numChildrenEdu += 1;
    let x = 'edu' + tempState.other.numChildrenEdu;
    tempState[x] = {
        university: '',
        eduCity: '',
        eduStart: '',
        eduEnd: '',
        degree: '',
        subject: '',
    }
    setState(tempState);  
  }

  // const handleDeleteEduBtnClick = () => {
  //   setState(prevState => {
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

  const handleDeleteEduBtnClick = () => {
    const tempState = state;
    let x = 'edu' + tempState.other.numChildrenEdu;
    delete tempState[x];
    if (tempState.other.numChildrenEdu > 0){
      tempState.other.numChildrenEdu -= 1;
    }
    setState(tempState);
  }

  return (
    <div className='main'>
      <header>
        Resume Creator
      </header>

      <Form 
        // onPiChange = {handlePiChange}
        // onExpChange = {handleExpChange} 
        // onEduChange = {handleEduChange}
        onChange = {handleFormChange}
        onPhotoChange = {handlePhotoChange}
        onDescriptionChange = {handleDescriptionChange}
        onJobClick = {handleAddJobPointBtnClick}
        onAddExp = {handleAddExpBtnClick}
        onDeleteExp = {handleDeleteExpBtnClick}
        onAddEdu = {handleAddEduBtnClick}
        onDeleteEdu = {handleDeleteEduBtnClick}
        data = {state}
      />
      <ReactToPrint
        trigger={() => {
          return <button id='submit'>Submit to printer</button>;
        }}
        // content={() => componentRef}
      />
        
      <Preview
        data = {state}
        // ref={el => (componentRef = el)}
      />

      <footer>
        <a href='https://github.com/jesscz'>
          Copyright ©  2023 Jessie
        </a>
      </footer>
    </div>
  );
  
}

export default App;