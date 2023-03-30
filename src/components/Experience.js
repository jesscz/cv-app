import React, { Component } from 'react';
import ExtraExperienceInput from './extraExperienceInput';
import ExtraJobPoints from './extraJobPoints';

class Experience extends Component {
    render() {

        const extraExpInputs = [];

        for (let i = 1; i <= this.props.data.other.numChildrenExp; i += 1) {
           extraExpInputs.push(< 
            ExtraExperienceInput 
                number={i}
                id={'exp'+i}
                onChange={this.props.onChange}
                onDescriptionChange={this.props.onDescriptionChange}
                onJobClick={this.props.onJobClick}
                data={this.props.data}
            />)
        }

        const extraJobPoint = [];

        for (let i = 1; i <= this.props.data.experience.descriptionChildren; i += 1) {
            extraJobPoint.push(<
             ExtraJobPoints
                i={i}
                onDescriptionChange={this.props.onDescriptionChange}
            />)
        }

        return (
            <div>
                <form>
                    <p 
                        id="experience" 
                        className="sectionTitle">
                        Experience:
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
                    <div htmlFor="description" className='jobPoints'>
                        <label>
                            <input
                                onChange= {this.props.onDescriptionChange}
                                placeholder="Job point"
                                className='0'
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
                <div id='expExtras'>
                    {extraExpInputs}
                </div>
                <button
                    onClick={this.props.onAddExp}>
                    Add experience section
                </button>
                <button>
                    {/* onClick={this.props.}> */}
                    Delete last section
                </button>
            </div>
        );
    }

}

export default Experience;