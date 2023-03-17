import React, { Component } from 'react';
import '../css/Form.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import ExtraExperience from './extraExperience';


class Form extends Component {

    render() {
        const children = [];

        for (let i = 0; i < this.props.data.other.numChildren; i += 1) {
           children.push(< ExtraExperience key={i} number={i}/>)
        }

        return (
            <div className='form'>
                <PersonalInfo 
                    onChange={this.props.onChange}
                    onPhotoChange = {this.props.onPhotoChange}
                />
                <div>
                    <Experience 
                        onChange={this.props.onChange}
                    />
                    <button
                        onClick={this.props.onAddExp}>
                        Add Experience
                    </button>
                    <div>
                        {children}
                    </div>
                </div>
                <div>
                    <Education 
                        onChange={this.props.onChange}
                    />
                    <button>
                        Add Education
                    </button> 
                </div>
                <button>
                    Submit to printer
                </button>
            </div>
        );
    }
}

export default Form;