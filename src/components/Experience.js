import React, { Component } from 'react';


class Experience extends Component {
    render() {
        return (
            <form>
                <p 
                    id="experience" 
                    className="title">
                    Experience:
                </p>
                <label htmlFor="position">
                    <input 
                        type="text" 
                        // name="" 
                        className="positionInput" 
                    />
                </label>
                <label htmlFor="company">
                    <input 
                        type="text" 
                        // name="" 
                        className="companyInput" 
                    />
                </label>
                <label htmlFor="city">
                    <input 
                        type="text" 
                        // name=""                             
                        className="cityInput" 
                    />
                </label>
                <label htmlFor="expStart">
                    <input 
                        type="date" 
                        // name=""                             
                        className="expStartInput" 
                    />
                </label>
                <label htmlFor="expEnd"> {/* change to option to choose present */}
                    <input 
                        type="date" 
                        // name="" 
                        className="expEndInput" 
                    />
                </label>
            </form>
        );
    }

}

export default Experience;