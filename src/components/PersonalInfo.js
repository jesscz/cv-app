import React, { Component } from 'react';


class PersonalInfo extends Component {
    // handleChange = (e) => {
    //     // for (label in form) {

    //     // }

    // // if (e.target.id == )
    //     console.log(e.target.id)
    // console.log(e.target.value)
    // // this.
    // };

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
                <label htmlFor="photoId">{/* change to button that imports image */}
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Photo"
                        id="photoId" 
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
                <label htmlFor="phoneNumber">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Phone number"
                        id="phoneNumber" 
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
            </form>
        );
    }

}

export default PersonalInfo;