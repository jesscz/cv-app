import React from 'react';
import ExtraExperienceInput from './extraExperienceInput';
import ExtraJobPoints from './extraJobPoints';

function Experience({ onExpChange, onDescriptionChange, onJobClick, onAddExp, onDeleteExp, data }) {

 const extraExpInputs = [];

 for (let i = 1; i <= data.other.numChildrenExp; i += 1) {
    extraExpInputs.push(< 
        ExtraExperienceInput 
            id={'exp'+i}
            onChange={onExpChange}
            onDescriptionChange={onDescriptionChange}
            onJobClick={onJobClick}
            data={data}
    />)
 }
    
 const extraJobPoint = [];
    
 for (let i = 1; i <= data.experience.descriptionChildren; i += 1) {
    extraJobPoint.push(<
        ExtraJobPoints
            i={i}
            onDescriptionChange={onDescriptionChange}
    />)
 }
 return (
    <div>
        <form>
            <p 
                id="experience" 
                className="sectionTitle">
                Experience:
            </p>
            <label htmlFor="company">
                <input 
                    onChange= {onExpChange}
                    type="text" 
                    placeholder="Company" 
                    className="company" 
                />
            </label>
            <label htmlFor="position">
                <input 
                    onChange= {onExpChange}
                    type="text" 
                    placeholder="Job title" 
                    className="position" 
                />
            </label>
            <label htmlFor="city">
                <input 
                    onChange= {onExpChange}
                    type="text" 
                    placeholder="City"                         
                    className="expCity" 
                />
            </label>
            <label htmlFor="expStart">
                Start date: 
                <input 
                    onChange= {onExpChange}
                    type="date" 
                    // name=""                             
                    className="expStart" 
                />
            </label>
            <label htmlFor="expEnd"> {/* change to option to choose present */}
                {/* Current: 
                <input
                    onChange= {onExpChange}
                    type="checkbox"
                    className="expCurrent"
                />
                Or end date: */}
                End date: 
                <input 
                    onChange= {onExpChange}
                    type="date" 
                    // name="" 
                    className="expEnd" 
                />
            </label>
            <div htmlFor="description" className='jobPoints'>
                <label>
                    <input
                        onChange= {onDescriptionChange}
                        placeholder="Job point"
                        className='0'
                    />
                </label>
                <label>
                    {extraJobPoint}
                </label>
                <button
                    onClick={onJobClick}>
                    Add job point
                </button>
            </div>
        </form>
        <div id='expExtras'>
            {extraExpInputs}
        </div>
        <button
            onClick={onAddExp}>
            Add experience section
        </button>
        <button
            onClick={onDeleteExp}>
            Delete last section
        </button>
    </div>
 );
}

export default Experience;
