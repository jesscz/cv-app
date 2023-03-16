import React, { Component } from 'react';


class Preview extends Component {

    render() {
        return (
            <div className='preview'>
                <div>
                    <h1>{this.props.data.personalInfo.firstName}</h1>
                    <h2>{this.props.data.personalInfo.lastName}</h2>
                    <p>{this.props.data.personalInfo.photoId}</p>
                    <p>{this.props.data.personalInfo.email}</p>
                    <p>{this.props.data.personalInfo.phoneNumber}</p>
                    <p>{this.props.data.personalInfo.address}</p>
                </div>
                <div>
                    <p>{this.props.data.experience.position}</p>
                    <p>{this.props.data.experience.company}</p>
                    <p>{this.props.data.experience.expCity}</p>
                    <p>{this.props.data.experience.expStart}</p>
                    <p>{this.props.data.experience.expEnd}</p>
                    <p>{this.props.data.experience.description}</p>
                </div>
                <div>
                    <p>{this.props.data.education.subject}</p>
                    <p>{this.props.data.education.university}</p>
                    <p>{this.props.data.education.eduCity}</p>
                    <p>{this.props.data.education.degree}</p>
                    <p>{this.props.data.education.eduStart}</p>
                    <p>{this.props.data.education.eduEnd}</p>
                </div>
            </div>
        );
    }
}

export default Preview;