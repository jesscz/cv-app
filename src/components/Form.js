import React from 'react';
import '../css/Form.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';


function Form({ onPiChange, onExpChange, onEduChange, onPhotoChange, onDescriptionChange, onJobClick, onAddExp, onDeleteExp, onAddEdu, onDeleteEdu, data }) {
 return (
    <div className='form'>
        <PersonalInfo 
            onPiChange={onPiChange}
            onPhotoChange = {onPhotoChange}
        />
        <Experience 
            // onChange={onChange}
            onExpChange={onExpChange}
            onDescriptionChange={onDescriptionChange}
            onJobClick={onJobClick}
            onAddExp={onAddExp}
            onDeleteExp={onDeleteExp}
            data={data}
        />
        <Education 
            // onChange={onChange}
            onEduChange={onEduChange}
            onAddEdu={onAddEdu}
            onDeleteEdu={onDeleteEdu}
            data={data}
        />
    </div>
 );
}

export default Form;