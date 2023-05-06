import React from 'react';

function PersonalInfo({ onPiChange, onPhotoChange }) {
 return (
    <form>
        <p
            id="personalInfo" 
            className="title">
            Personal Information:
        </p>
        <label htmlFor="firstName">
            <input 
                onChange= {onPiChange}
                type="text" 
                placeholder="First name"
                id="firstName" 
            />
        </label>
        <label htmlFor="lastName">
            <input 
                onChange= {onPiChange}
                type="text" 
                placeholder="Last name"
                id="lastName" 
            />
        </label>
        <label htmlFor="photoId">Select photo ID image: 
            <input 
                onChange= {onPhotoChange}
                type="file" 
                id="photoId" 
            />
        </label>
        <label htmlFor="email">
            <input 
                onChange= {onPiChange}
                type="text" 
                placeholder="Email"
                id="email" 
            />
        </label>
        <label htmlFor="phoneNumber">
            <input 
                onChange= {onPiChange}
                type="text" 
                placeholder="Phone number"
                id="phoneNumber" 
            />
        </label>
        <label htmlFor="address">
            <input 
                onChange= {onPiChange}
                type="text" 
                placeholder="Address"
                id="address" 
            />
        </label>
    </form>
 );
}

export default PersonalInfo;