import React, { Component } from "react";

class ExtraEducationInput extends Component {
    render(){
        return(
            <form>
                <p
                    id={this.props.id}>
                </p>
                <label htmlFor="university">
                    <input 
                        onChange= {this.props.onChange}
                        type="text" 
                        placeholder="University name" 
                        className="university" 
                    />
                </label>
                <label htmlFor="city">
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
        )
    }
}

export default ExtraEducationInput;