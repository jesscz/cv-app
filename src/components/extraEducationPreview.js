import React, { Component } from 'react';


class ExtraEducationPreview extends Component {
    render(){
        let x = 'edu'+this.props.i;
        return(
            <div className='previewGroup'>
                <p>{this.props.data[x].university}{', '}</p>
                <span>{this.props.data[x].eduCity}{' '}</span>
                <span>{'('}{this.props.data[x].eduStart}{' to '}</span>
                <span>{this.props.data[x].eduEnd}{')'}</span>
                <p>{this.props.data[x].degree}{' in '}</p>
                <span>{this.props.data[x].subject}</span>
            </div>
        )
    }
}

export default ExtraEducationPreview;