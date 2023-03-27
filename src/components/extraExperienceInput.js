import React, { Component } from 'react';
import ExtraJobPoints from './extraJobPoints';


class ExtraExperienceInput extends Component {
    render() {

        const extraJobPoint = [];

        for (let i = 1; i <= this.props.data[this.props.id].descriptionChildren; i += 1) {
            extraJobPoint.push(<
             ExtraJobPoints
                i={i}
                onDescriptionChange={this.props.onDescriptionChange}
            />)
        }

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
                <div>
                    <label htmlFor="description">
                        <input
                            onChange= {this.props.onDescriptionChange}
                            placeholder="Job points"
                            className="0"
                        />
                    </label>
                    <label>
                        {extraJobPoint}
                    </label>
                    <button
                        onClick={this.props.onJobClick}>
                        Add job point
                    </button>
                </div>
            </form>
        );
    }
}

export default ExtraExperienceInput;