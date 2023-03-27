import React, { Component } from "react";

class ExtraJobPoints extends Component {
    render() {
        return (
            <input
                type='text'
                placeholder='Job point'
                className={this.props.i}
                onChange={this.props.onDescriptionChange}
            />
        )
    }
}

export default ExtraJobPoints;