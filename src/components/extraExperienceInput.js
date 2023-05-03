import React  from "react";
import ExtraJobPoints from "./extraJobPoints";

function ExtraExperienceInput({ i, id, onChange, onDescriptionChange, onJobClick, data}) {
 const extraJobPoint = [];

 for (let i = 1; i <= data[id].descriptionChildren; i += 1) {
    extraJobPoint.push(<
     ExtraJobPoints
        i={i}
        onDescriptionChange={onDescriptionChange}
    />)
 }

 return (
    <form>
        <div
            id={id}>
        </div>
        <label htmlFor="company">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="Company" 
                className="company" 
            />
        </label>
        <label htmlFor="position">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="Job title" 
                className="position" 
            />
        </label>
        <label htmlFor="city">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="City"                         
                className="expCity" 
            />
        </label>
        <label htmlFor="expStart">
            Start date: 
            <input 
                onChange= {onChange}
                type="date" 
                // name=""                             
                className="expStart" 
            />
        </label>
        <label htmlFor="expEnd"> {/* change to option to choose present */}
            {/* Current: 
            <input
                onChange= {onChange}
                type="checkbox"
                className="expCurrent"
            />
            Or end date: */}
            End date:
            <input 
                onChange= {onChange}
                type="date" 
                // name="" 
                className="expEnd" 
            />
        </label>
        <div htmlFor="description" className='jobPoints'>
            <label>
                <input
                    onChange= {onDescriptionChange}
                    placeholder="Job points"
                    className="0"
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
 );
}

export default ExtraExperienceInput;
