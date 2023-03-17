import React, { Component } from 'react';
// import DisplayImage from './DisplayImage';

class PersonalInfo extends Component {
    render() {
        return (
            <form>
                <p
                    id="personalInfo" 
                    className="title">
                    Personal Information:
                </p>
                <label htmlFor="firstName">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="First name"
                        id="firstName" 
                    />
                </label>
                <label htmlFor="lastName">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Last name"
                        id="lastName" 
                    />
                </label>
                <label htmlFor="photoId">Select photo ID image: 
                    <input 
                        onChange= {this.props.onPhotoChange}
                        type="file" 
                        // placeholder="Photo"
                        id="photoId" 
                    />
                </label>
                <label htmlFor="email">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Email"
                        id="email" 
                    />
                </label>
                <label htmlFor="phoneNumber">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Phone number"
                        id="phoneNumber" 
                    />
                </label>
                <label htmlFor="address">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Address"
                        id="address" 
                    />
                </label>
            </form>
        );
    }
}

export default PersonalInfo;