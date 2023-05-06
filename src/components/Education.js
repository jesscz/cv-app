import React from 'react';
import ExtraEducationInput from './extraEducationInput';

function Education({ onEduChange, onAddEdu, onDeleteEdu, data }) {

 const children = [];

 for (let i = 1; i <= data.other.numChildrenEdu; i += 1) {
    children.push(<
        ExtraEducationInput   
            id={'edu'+i}
            onChange={onEduChange}
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
                    onChange= {onEduChange}
                    type="text" 
                    placeholder="University name" 
                    className="university" 
                />
            </label><label htmlFor="city">
                <input 
                    onChange= {onEduChange}
                    type="text" 
                    placeholder="City"
                    className="eduCity" 
                />
            </label>
            <label htmlFor="eduStart">
                <input 
                    onChange= {onEduChange}
                    type="date" 
                    className="eduStart" 
                />
            </label>
            <label htmlFor="eduEnd"> {/* change to option to choose present */}
                <input 
                    onChange= {onEduChange}
                    type="date" 
                    // name="" 
                    className="eduEnd"
                />
            </label>
            <label htmlFor="degree">
                <input 
                    onChange= {onEduChange}
                    type="text" 
                    placeholder="Degree"
                    className="degree" 
                />
            </label>
            <label htmlFor="subject">
                <input 
                    onChange= {onEduChange}
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

// class Education extends Component {
//     render() {

//         

//         
//     }
// }

