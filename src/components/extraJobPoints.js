import React from "react";

function ExtraJobPoints(props) {
    const { i, onDescriptionChange } = props;
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