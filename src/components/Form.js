import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
    render() {
        return (
            <div className='form'>
                < PersonalInfo />
                <Experience />
                <Education />
            </div>
        );
    }
}

export default Form;