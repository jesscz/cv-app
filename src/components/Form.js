import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <div>
                <form>{/* includes personal information */}
                    <p
                        id="personalInformation" 
                        className="title">
                            Personal Information:
                    </p>
                    <label htmlFor="firstName">
                        <input 
                            type="text" 
                            // name="" 
                            id="firstNameInput" 
                        />
                    </label>
                    <label htmlFor="lastName">
                        <input 
                            type="text" 
                            // name="" 
                            id="lastNameInput" 
                        />
                    </label>
                    <label htmlFor="title">
                        <input 
                            type="text" 
                            // name="" 
                            id="titleInput" 
                        />
                    </label>
                    <label htmlFor="photoId">{/* change to button that imports image */}
                        <input 
                            type="text" 
                            // name="" 
                            id="photoIdInput" 
                        />
                    </label>
                    <label htmlFor="address">
                        <input 
                            type="text" 
                            // name="" 
                            id="addressInput" 
                        />
                    </label>
                    <label htmlFor="phoneNumber">
                        <input 
                            type="text" 
                            // name="" 
                            id="phoneNumberInput" 
                        />
                    </label>
                    <label htmlFor="email">
                        <input 
                            type="text" 
                            // name="" 
                            id="emailInput" 
                        />
                    </label>
                    <label htmlFor="description">
                        <input 
                            type="text" 
                            // name="" 
                            id="descriptionInput" 
                        />
                    </label>
                </form>
                <form>{/* includes experience */}
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
                <form>{/* includes education */}
                    <p 
                        id="education" 
                        className="title">
                            Education:
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
            </div>
        );
    }
}

export default Form;