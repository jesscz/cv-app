import React, { Component } from 'react';


class ExtraExperienceInput extends Component {
    render() {
        // const id = {this.props.key}
        return (
            <form>
                <p
                    id={this.props.id}>
                </p>
                <label htmlFor="company">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Company" 
                        className="company" 
                    />
                </label>
                <label htmlFor="position">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="Job title" 
                        className="position" 
                    />
                </label>
                <label htmlFor="city">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="City"                         
                        className="expCity" 
                    />
                </label>
                <label htmlFor="expStart">
                    Start date: 
                    <input 
                        onChange= {this.props.onChange}
                        type="date" 
                        // name=""                             
                        className="expStart" 
                    />
                </label>
                <label htmlFor="expEnd"> {/* change to option to choose present */}
                    Current: 
                    <input
                        onChange= {this.props.onChange}
                        type="checkbox"
                        className="expCurrent"
                    />
                    Or end date:
                    <input 
                        onChange= {this.props.onChange}
                        type="date" 
                        // name="" 
                        className="expEnd" 
                    />
                </label>
                <label htmlFor="description">
                    <textarea
                        onChange= {this.props.onChange}
                        placeholder="Job points"
                        className="description"
                    />
                </label>
            </form>
        );
    }
}

export default ExtraExperienceInput;