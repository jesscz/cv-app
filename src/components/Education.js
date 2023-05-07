import React from 'react';
import ExtraEducationInput from './extraEducationInput';

function Education({ onChange, onAddEdu, onDeleteEdu, data }) {

 const children = [];

 for (let i = 1; i <= data.other.numChildrenEdu; i += 1) {
    children.push(<
        ExtraEducationInput   
            id={'edu'+i}
            onChange={onChange}
    />)
 }
 return (
    <div>
        <form>
            <p 
                id="education" 
                className="sectionTitle">
                Education:
            </p>
            <label htmlFor="university">
                <input 
                    onChange= {onChange}
                    type="text" 
                    placeholder="University name" 
                    className="university" 
                />
            </label><label htmlFor="city">
                <input 
                    onChange= {onChange}
                    type="text" 
                    placeholder="City"
                    className="eduCity" 
                />
            </label>
            <label htmlFor="eduStart">
                <input 
                    onChange= {onChange}
                    type="date" 
                    className="eduStart" 
                />
            </label>
            <label htmlFor="eduEnd"> {/* change to option to choose present */}
                <input 
                    onChange= {onChange}
                    type="date" 
                    // name="" 
                    className="eduEnd"
                />
            </label>
            <label htmlFor="degree">
                <input 
                    onChange= {onChange}
                    type="text" 
                    placeholder="Degree"
                    className="degree" 
                />
            </label>
            <label htmlFor="subject">
                <input 
                    onChange= {onChange}
                    type="text" 
                    placeholder="Subject"
                    className="subject" 
                />
            </label>
        </form>
        <div id='eduExtras'>
            {children}
        </div>
        <button
            onClick={onAddEdu}>
            Add education section
        </button> 
        <button
            onClick={onDeleteEdu}>
            Delete last section
        </button>
    </div>
 );
}

export default Education;