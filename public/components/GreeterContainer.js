var React = require('react');
var ReactDOM = require('react-dom');

class GreeterContainer extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!!!!!</h1>
            </div>
        );
    }

}

class Dummy extends React.Component {
    rendDummyClasser() {
        return (<h1>Error</h1>);
    }
}

// es5 
//module.exports = GreeterContainer; 
// es6
export default GreeterContainer;