import React, { Component } from 'react';
import '../css/Preview.css';


class Preview extends Component {

    render() {
        return (
            <div className='preview'>
                <div className='previewPersonalInfo'>
                    <h1>{this.props.data.personalInfo.firstName} {this.props.data.personalInfo.lastName}</h1>
                    <img src={this.props.data.personalInfo.photoId} alt='user ID'/>
                    <p id='personalInfoL2'>
                        <span>{this.props.data.personalInfo.email}{' | '}</span>
                        <span>{this.props.data.personalInfo.phoneNumber}{' | '}</span>
                        <span>{this.props.data.personalInfo.address}</span>
                    </p>
                </div>
                <div>
                    <p className="previewSectionTitle">   
                        Experience
                    </p>
                    <p className='previewGroup'>
                        <p className='previewCompany'>{this.props.data.experience.company}</p>
                        <span>{this.props.data.experience.position}{' '}</span>
                        <span className='expCity'>{this.props.data.experience.expCity}{' '}</span>
                        <span>{'('}{this.props.data.experience.expStart}{' to '}</span>
                        <span>{this.props.data.experience.expEnd}{')'}</span>
                        <p>{this.props.data.experience.description}</p>
                    </p>
                </div>
                <div>
                    <p className="previewSectionTitle">
                        Education
                    </p>
                    <p>
                        <p>{this.props.data.education.university}</p>
                        <p>{this.props.data.education.eduCity}</p>
                        <p>{this.props.data.education.eduStart}</p>
                        <p>{this.props.data.education.eduEnd}</p>
                        <p>{this.props.data.education.degree}</p>
                        <p>{this.props.data.education.subject}</p>
                    </p>
                </div>
            </div>
        );
    }
}

export default Preview;