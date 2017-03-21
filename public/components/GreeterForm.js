'use strict';

import React from 'react';

class GreeterForm extends React.Component {

    constructor(props) {
        super(props); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        var name = this.refs.name.value; 
        var message = this.refs.message.value; 
        
        this.refs.name.value = '';
        this.refs.message.value = ''; 
        
        this.props.onGreeterFormHandler(name, message);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref='name'/> <button>Submit</button> <br/><br />
                    <textarea ref='message'></textarea> 
               </form>
            </div>
        );
    }
}

export default GreeterForm;