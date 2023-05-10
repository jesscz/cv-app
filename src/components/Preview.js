import React from 'react';
import '../css/Preview.css';
import ExtraExperiencePreview from './extraExperiencePreview';
import ExtraEducationPreview from './extraEducationPreview';


export const Preview = React.forwardRef(({ data }, ref) => {

 const expChildren = [];
 for (let i = 1; i <= data?.other?.numChildrenExp; i += 1) {
    expChildren.push(<ExtraExperiencePreview
        i={i}
        data={data}
    />)
 }

 const eduChildren = [];
 for (let i = 1; i <= data?.other?.numChildrenEdu; i += 1) {
    eduChildren.push(<ExtraEducationPreview
        i={i}
        data={data}
    />)
 }

//  const componentRef = useRef();

 return (
    <div ref={ref} className='preview'>
        <div className='previewPersonalInfo'>
            <h1>{data?.personalInfo?.firstName} {data?.personalInfo?.lastName}</h1>
            <img src={data?.personalInfo?.photoId} alt='user ID'/>
            <p id='personalInfoL2'>
                <span>{data?.personalInfo?.email}{' | '}</span>
                <span>{data?.personalInfo?.phoneNumber}{' | '}</span>
                <span>{data?.personalInfo?.address}</span>
            </p>
        </div>
        <div>
            <p className="previewSectionTitle">   
                Experience
            </p>
            <div className='previewGroup'>
                <p className='previewCompany'>{data?.experience?.company}</p>
                <span>{data?.experience?.position}{' '}</span>
                <span className='expCity'>{data?.experience?.expCity}{' '}</span>
                <span>{'('}{data?.experience?.expStart}{' to '}</span>
                <span>{data?.experience?.expEnd}{')'}</span>
                <ul>{data?.experience?.description
                    .filter((i) => {
                        return i !== '';
                    })
                    .map((i) => {
                        return <li>{[i]}</li>
                    })
                }</ul>
            </div>
            {expChildren}
        </div>
        <div>
            <p className="previewSectionTitle">
                Education
            </p>
            <div className='previewGroup'>
                <span>{data?.education?.university}{', '}</span>
                <span>{data?.education?.eduCity}{' '}</span>
                <span>{'('}{data?.education?.eduStart}{' to '}</span>
                <span>{data?.education?.eduEnd}{')'}</span>
                <p>
                    <span>{data?.education?.degree}{' in '}</span>
                    <span>{data?.education?.subject}</span>
                </p>
            </div>
            {eduChildren}
        </div>
    </div>
 );
})
