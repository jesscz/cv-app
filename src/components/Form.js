import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';

class Form extends Component {

    render() {
        return (
            <div className='form'>
                <PersonalInfo 
                    onChange={this.props.onChange}/>
                <Experience 
                    onChange={this.props.onChange}/>
                <Education 
                    onChange={this.props.onChange}/>
            </div>
        );
    }
}

export default Form;