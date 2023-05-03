import React from "react";

function ExtraJobPoints({ i, onDescriptionChange }) {
 return (
    <input 
        type="text"
        placeholder="Job Point"
        className={i}
        onChange={onDescriptionChange}
    />
 );
}

export default ExtraJobPoints;