import React, { Component } from 'react';
import '../css/Preview.css';


class Preview extends Component {

    render() {
        return (
            <div className='preview'>
                <div className='previewPersonalInfo'>
                    <h1>{this.props.data.personalInfo.firstName} {this.props.data.personalInfo.lastName}</h1>
                    <p id='photoId'>{this.props.data.personalInfo.photoId}</p>
                    <p id='personalInfoL2'>
                        {this.props.data.personalInfo.email}{' | '}
                        {this.props.data.personalInfo.phoneNumber}{' | '}
                        {this.props.data.personalInfo.address}
                    </p>
                </div>
                <div>
                    <p
                        className="previewSectionTitle"    
                    >Experience</p>
                    <p>{this.props.data.experience.position}</p>
                    <p>{this.props.data.experience.company}</p>
                    <p>{this.props.data.experience.expCity}</p>
                    <p>{this.props.data.experience.expStart}</p>
                    <p>{this.props.data.experience.expEnd}</p>
                    <p>{this.props.data.experience.description}</p>
                </div>
                <div>
                    <p
                        className="previewSectionTitle" 
                    >Education</p>
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