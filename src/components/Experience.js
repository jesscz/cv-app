import React, { Component } from 'react';
import ExtraExperience from './extraExperience';


class Experience extends Component {
    render() {

        const children = [];

        for (let i = 1; i <= this.props.data.other.numChildrenExp; i += 1) {
           children.push(< 
            ExtraExperience 
                key={i} 
                number={i}
                id={'exp'+i}
                onChange={this.props.onChange}
                data={this.props.data}
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
                    <button
                        onClick={this.props.onAddExp}>
                        Add Experience
                    </button>
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
                <div id='expExtras'>
                    {children}
                </div>
            </div>
        );
    }

}

export default Experience;