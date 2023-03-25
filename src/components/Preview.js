import React, { Component } from 'react';
import '../css/Preview.css';
import ExtraExperiencePreview from './extraExperiencePreview';
import ExtraEducationPreview from './extraEducationPreview';


class Preview extends Component {
    render() {

        const expChildren = [];
        for (let i = 1; i <= this.props.data.other.numChildrenExp; i += 1) {
            expChildren.push(<ExtraExperiencePreview
                i={i}
                data={this.props.data}
            />)
        }

        const eduChildren = [];
        for (let i = 1; i <= this.props.data.other.numChildrenEdu; i += 1) {
            eduChildren.push(<ExtraEducationPreview
                i={i}
                data={this.props.data}
            />)
        }

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
                    <div className='previewGroup'>
                        <p className='previewCompany'>{this.props.data.experience.company}</p>
                        <span>{this.props.data.experience.position}{' '}</span>
                        <span className='expCity'>{this.props.data.experience.expCity}{' '}</span>
                        <span>{'('}{this.props.data.experience.expStart}{' to '}</span>
                        <span>{this.props.data.experience.expEnd}{')'}</span>
                        <p>{this.props.data.experience.description}</p>
                    </div>
                    {expChildren}
                </div>
                <div>
                    <p className="previewSectionTitle">
                        Education
                    </p>
                    <div className='previewGroup'>
                        <span>{this.props.data.education.university}{', '}</span>
                        <span>{this.props.data.education.eduCity}{' '}</span>
                        <span>{'('}{this.props.data.education.eduStart}{' to '}</span>
                        <span>{this.props.data.education.eduEnd}{')'}</span>
                        <p>
                            <span>{this.props.data.education.degree}{' in '}</span>
                            <span>{this.props.data.education.subject}</span>
                        </p>
                    </div>
                    {eduChildren}
                </div>
            </div>
        );
    }
}

export default Preview;