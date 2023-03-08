import React, { Component } from 'react';


class Education extends Component {
    render() {
        return (
            <form>
                <p 
                    id="education" 
                    className="title">
                    Education:
                </p>
                <label htmlFor="university">
                    <input 
                        type="text" 
                        placeholder="University name" 
                        className="universityInput" 
                    />
                </label>
                <label htmlFor="city">
                    <input 
                        type="text" 
                        placeholder="City"
                        className="eduCityInput" 
                    />
                </label>
                <label htmlFor="degree">
                    <input 
                        type="text" 
                        placeholder="Degree"
                        className="degreeInput" 
                    />
                </label>
                <label htmlFor="Subject">
                    <input 
                        type="text" 
                        placeholder="Subject"
                        className="subjectInput" 
                    />
                </label>
                <label htmlFor="eduStart">
                    <input 
                        type="date" 
                        // name="" 
                        className="eduStartInput" 
                    />
                </label>
                <label htmlFor="eduEnd"> {/* change to option to choose present */}
                    <input 
                        type="date" 
                        // name="" 
                        className="eduEndInput"
                    />
                </label>
            </form>    
        );
    }

}

export default Education;