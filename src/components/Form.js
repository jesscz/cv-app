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
                    onDescriptionChange={this.props.onDescriptionChange}
                    onJobClick={this.props.onJobClick}
                    onAddExp={this.props.onAddExp}
                    data={this.props.data}
                />
                <Education 
                    onChange={this.props.onChange}
                    onAddEdu={this.props.onAddEdu}
                    data={this.props.data}
                />
                <button>
                    Submit to printer
                </button>
            </div>
        );
    }
}

export default Form;