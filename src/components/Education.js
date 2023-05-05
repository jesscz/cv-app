import React, { Component } from 'react';
import ExtraEducationInput from './extraEducationInput';


class Education extends Component {
    render() {

        const children = [];

        for (let i = 1; i <= this.props.data.other.numChildrenEdu; i += 1) {
            children.push(<
             ExtraEducationInput   
                // i={i}
                id={'edu'+i}
                onChange={this.props.onChange}
                // data={this.props.data}
             />)
        }

        return (
            <div>
                <form>
                    <p 
                        id="education" 
                        className="sectionTitle">
                        Education:
                    </p>
                    <label htmlFor="university">
                        <input 
                            onChange= {this.props.onChange}
                            type="text" 
                            placeholder="University name" 
                            className="university" 
                        />
                    </label><label htmlFor="city">
                        <input 
                            onChange= {this.props.onChange}
                            type="text" 
                            placeholder="City"
                            className="eduCity" 
                        />
                    </label>
                    <label htmlFor="eduStart">
                        <input 
                            onChange= {this.props.onChange}
                            type="date" 
                            className="eduStart" 
                        />
                    </label>
                    <label htmlFor="eduEnd"> {/* change to option to choose present */}
                        <input 
                            onChange= {this.props.onChange}
                            type="date" 
                            // name="" 
                            className="eduEnd"
                        />
                    </label>
                    <label htmlFor="degree">
                        <input 
                            onChange= {this.props.onChange}
                            type="text" 
                            placeholder="Degree"
                            className="degree" 
                        />
                    </label>
                    <label htmlFor="subject">
                        <input 
                            onChange= {this.props.onChange}
                            type="text" 
                            placeholder="Subject"
                            className="subject" 
                        />
                    </label>
                </form>
                <div id='eduExtras'>
                    {children}
                </div>
                <button
                    onClick={this.props.onAddEdu}>
                    Add education section
                </button> 
                <button
                    onClick={this.props.onDeleteEdu}>
                    Delete last section
                </button>
            </div>
        );
    }
}

export default Education;