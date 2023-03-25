import React, { Component } from 'react';


class ExtraEducationPreview extends Component {
    render(){
        let x = 'edu'+this.props.i;
        return(
            <div className='previewGroup'>
                <span>{this.props.data[x].university}{', '}</span>
                <span>{this.props.data[x].eduCity}{' '}</span>
                <span>{'('}{this.props.data[x].eduStart}{' to '}</span>
                <span>{this.props.data[x].eduEnd}{')'}</span>
                <p>
                    <span>{this.props.data[x].degree}{' in '}</span>
                    <span>{this.props.data[x].subject}</span>
                </p>
            </div>
        )
    }
}

export default ExtraEducationPreview;