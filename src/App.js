import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      personalInfo : {
        firstName: '',
        lastName: '',
        photoId: '',
        address: '',
        phoneNumber: '',
        email: '',
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
  
  handleChange = (e) => {
    // for (label in form) {

    // } 
    //-----

    // if (e.target.id == )
    //-----
    
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.value)
    this.setState( 
      this.state,
    );

    Object.entries(this.state).map((key) => {
      
      return console.log(key);
    })
    //----
  };
  // const HANDLECHANGE = this.handleChange.bind(this);
  
  render() {
    // const { data } = this.state;
    return (
      <div className='main'>
        <header>
          Resume Creator
        </header>

        <Form 
          onChange = {this.handleChange}
        />

        <Preview/>

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
