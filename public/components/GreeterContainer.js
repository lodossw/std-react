'use strict';

import React from 'react';
import GreeterMessage from 'GreeterMessage'; 
import GreeterForm from 'GreeterForm'; 

class GreeterContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            name : 'none',
            message : '111none'
        };

        this.onGreeterFormHandler = this.onGreeterFormHandler.bind(this);        
    }

    onGreeterFormHandler(name, message) {
        this.setState({
            name : name,
            message : message 
        });
    }

    render() {

        var name = this.state.name; 
        var message = this.state.message; 

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onGreeterFormHandler={this.onGreeterFormHandler}/>
            </div>
        );
    }
}

GreeterMessage.defaultProps = {
    name : 'none',
    message : '111none'
}


// es6
export default GreeterContainer;