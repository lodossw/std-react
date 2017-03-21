'use strict';

var React = require('react');

class GreeterMessage extends React.Component {

    render() {
    
        var name = this.props.name; 
        var message = this.props.message; 

        return (
            <div>
                <h1>Name Caller</h1>
                <span>Please, Input your name</span><br/><br/>
                <span>Input Name : {name}</span><br/><br/>
                <span>Input Message : {message}</span>
                <br/><br/>
            </div>
        );
    }
}


export default GreeterMessage;