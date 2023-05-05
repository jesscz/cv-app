import React from "react";

function ExtraEducationInput({ id, onChange }) { 
 return(
    <form>
        <div
            id={id}>
        </div>
        <label htmlFor="university">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="University name" 
                className="university" 
            />
        </label>
        <label htmlFor="city">
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
 )
}

export default ExtraEducationInput;

// class ExtraEducationInput extends Component {
//     render(){
//         
//     }
// }

