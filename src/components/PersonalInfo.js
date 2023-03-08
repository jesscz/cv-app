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
                        placeholder="First name"
                        id="firstNameInput" 
                    />
                </label>
                <label htmlFor="lastName">
                    <input 
                        type="text" 
                        placeholder="Last name"
                        id="lastNameInput" 
                    />
                </label>
                <label htmlFor="title">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        id="titleInput" 
                    />
                </label>
                <label htmlFor="photoId">{/* change to button that imports image */}
                    <input 
                        type="text" 
                        placeholder="Photo"
                        id="photoIdInput" 
                    />
                </label>
                <label htmlFor="address">
                    <input 
                        type="text" 
                        placeholder="Address"
                        id="addressInput" 
                    />
                </label>
                <label htmlFor="phoneNumber">
                    <input 
                        type="text" 
                        placeholder="Phone number"
                        id="phoneNumberInput" 
                    />
                </label>
                <label htmlFor="email">
                    <input 
                        type="text" 
                        placeholder="Email"
                        id="emailInput" 
                    />
                </label>
                <label htmlFor="description">
                    <input 
                        type="text" 
                        placeholder="Description"
                        id="descriptionInput" 
                    />
                </label>
            </form>
        );
    }

}

export default PersonalInfo;