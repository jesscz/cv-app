import React from "react";

function ExtraExperiencePreview({ i, data }) {
 let x = 'exp'+i;

 return (
    <div className='previewGroup'>
        <p className='previewCompany'>{data[x]?.company}</p>
        <span>{data[x]?.position}{' '}</span>
        <span className='expCity'>{data[x]?.expCity}{' '}</span>
        <span>{'('}{data[x]?.expStart}{' to '}</span>
        <span>{data[x]?.expEnd}{')'}</span>
        <ul>{data[x]?.description
        .filter((i) => {
            return i !== '';
        }).map((i) => {
            return <li>{[i]}</li>
        })
        }</ul>
    </div> 
 );
}

export default ExtraExperiencePreview;