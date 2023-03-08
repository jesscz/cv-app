import React, { Component } from 'react';


class PersonalInfo extends Component {
    render() {
        return (
            <form>
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
        );
    }

}

export default PersonalInfo;