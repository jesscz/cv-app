import React, { Component } from "react";


class ExtraExperiencePreview extends Component {
    render(){
        let x = 'exp'+this.props.i;
        return(
            <div className='previewGroup'>
                <p className='previewCompany'>{this.props.data[x].company}</p>
                <span>{this.props.data[x].position}{' '}</span>
                <span className='expCity'>{this.props.data[x].expCity}{' '}</span>
                <span>{'('}{this.props.data[x].expStart}{' to '}</span>
                <span>{this.props.data[x].expEnd}{')'}</span>
                <p>{this.props.data[x].description}</p>
            </div>
        )
    }
}


export default ExtraExperiencePreview;