import React from 'react';
import '../css/Form.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';


function Form({ onChange, onPhotoChange, onDescriptionChange, onJobClick, onAddExp, onDeleteExp, onAddEdu, onDeleteEdu, data }) {
 return (
    <div className='form'>
        <PersonalInfo 
            // onPiChange={onPiChange}
            onChange={onChange}
            onPhotoChange = {onPhotoChange}
        />
        <Experience 
            // onExpChange={onExpChange}
            onChange={onChange}
            onDescriptionChange={onDescriptionChange}
            onJobClick={onJobClick}
            onAddExp={onAddExp}
            onDeleteExp={onDeleteExp}
            data={data}
        />
        <Education 
            // onEduChange={onEduChange}
            onChange={onChange}
            onAddEdu={onAddEdu}
            onDeleteEdu={onDeleteEdu}
            data={data}
        />
    </div>
 );
}

export default Form;