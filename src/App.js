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
  });
  
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
    const x = e.target.parentNode.parentNode.parentNode.firstChild.id; 
    //x is 'experience', 'exp1'  or 'exp2' etc
    const temp = {...state};
    temp[x].description[e.target.className] = e.target.value; 
    setState(temp)
  };

  const handleAddJobPointBtnClick = (e) => {
    e.preventDefault();
    const x = e.target.parentNode.parentNode.firstChild.id;
    setState({
      ...state,
      [x]: {
        ...state[x],
        descriptionChildren: state[x].descriptionChildren + 1,
      }
    })
  };

  const handleAddExpBtnClick = () => {
    setState(state => ({
      ...state,
      other: {
        ...state.other,
        numChildrenExp: state.other.numChildrenExp + 1,
      }
    }))
    let x = 'exp' + (state.other.numChildrenExp + 1);
    setState(state => ({
      ...state,
      [x]: {
        company: '',
        position: '',
        expCity: '',
        expStart: '',
        expCurrent: '',
        expEnd: '',
        descriptionChildren: 0,
        description: [], 
      }
    }));
  };

  const handleDeleteExpBtnClick = () => {
    let x = 'exp' + state.other.numChildrenExp;
    if (state.other.numChildrenExp > 0){
      const temp = {...state};
      temp.other.numChildrenExp--;
      delete temp[x];
      setState(temp);
    }
  };

  const handleAddEduBtnClick = () => {
    setState(state => ({
      ...state,
      other: {
        ...state.other,
        numChildrenEdu: state.other.numChildrenEdu + 1,
      }
    }))
    let x = 'edu' + (state.other.numChildrenEdu + 1)
    setState(state => ({
      ...state,
      [x]: {
        university: '',
        eduCity: '',
        eduStart: '',
        eduEnd: '',
        degree: '',
        subject: '',
      }
    }))
  };

  const handleDeleteEduBtnClick = () => {
    let x = 'edu' + state.other.numChildrenEdu;
    if (state.other.numChildrenEdu > 0){
      const temp = {...state};
      temp.other.numChildrenEdu--;
      delete temp[x];
      setState(temp);
    }
  };

  return (
    <div className='main'>
      <header>
        Resume Creator
      </header>

      <Form 
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