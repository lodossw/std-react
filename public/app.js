class Greeter extends React.Component {

    render() {
        
        var name = this.props.name;
        var message = this.props.message; 

        return ( 
            <div>
              <h1>Hello {name}!!</h1>
              <h1>{message + '!!'}</h1>
            </div>
        );
    }
};

/*
Greeter.propTypes = {
  name: React.PropTypes.string
};
*/

Greeter.defaultProps = {
  name: 'Mary',
  message: 'oops!'
};

var firstName = 'killer'; 

ReactDOM.render( 
    <Greeter name={firstName} message="Message from prop!" />, 
    document.getElementById("app")
);