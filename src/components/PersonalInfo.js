import React from 'react';

function PersonalInfo({ onChange, onPhotoChange }) {
 return (
    <form>
        <p
            id="personalInfo" 
            className="title">
            Personal Information:
        </p>
        <label htmlFor="firstName">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="First name"
                className="firstName" 
            />
        </label>
        <label htmlFor="lastName">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="Last name"
                className="lastName" 
            />
        </label>
        <label htmlFor="photoId">Select photo ID image: 
            <input 
                onChange= {onPhotoChange}
                type="file" 
                className="photoId" 
            />
        </label>
        <label htmlFor="email">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="Email"
                className="email" 
            />
        </label>
        <label htmlFor="phoneNumber">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="Phone number"
                className="phoneNumber" 
            />
        </label>
        <label htmlFor="address">
            <input 
                onChange= {onChange}
                type="text" 
                placeholder="Address"
                className="address" 
            />
        </label>
    </form>
 );
}

export default PersonalInfo;