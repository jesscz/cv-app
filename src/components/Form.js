import React, { Component } from 'react';
import '../css/Form.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';


class Form extends Component {
    render() {

        return (
            <div className='form'>
                <PersonalInfo 
                    onChange={this.props.onChange}
                    onPhotoChange = {this.props.onPhotoChange}
                />
                <Experience 
                    onChange={this.props.onChange}
                    onAddExp={this.props.onAddExp}
                    data={this.props.data}
                />
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