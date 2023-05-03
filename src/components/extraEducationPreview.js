import React from "react";

function ExtraEducationPreview({ i, data }) {
 let x = 'edu'+i;
 return(
    <div className='previewGroup'>
        <span>{data[x].university}{', '}</span>
        <span>{data[x].eduCity}{' '}</span>
        <span>{'('}{data[x].eduStart}{' to '}</span>
        <span>{data[x].eduEnd}{')'}</span>
        <p>
            <span>{data[x].degree}{' in '}</span>
            <span>{data[x].subject}</span>
        </p>
    </div>
 )
}

export default ExtraEducationPreview;