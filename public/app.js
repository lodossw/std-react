class GreeterMessage extends React.Component {
    render() {
        
        var name = this.props.name; 
        var message = this.props.message; 

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p> 
            </div> 
        );
    }
}

class GreeterForm extends React.Component {
    
    constructor(props) {
        super(props); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        var name = this.refs.name.value; 
        if(name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    }

    render() {
        return (
              <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
              </form> 
        );
    }
}


class Greeter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name : this.props.name };
        this.handleNewName = this.handleNewName.bind(this);
    }

    handleNewName( _name ) {
        this.setState({
            name : _name
        });
    } 

    render() {

        var name = this.state.name; 
        var message = this.props.message; 

        return ( 
            <div>
              <GreeterMessage name={name} message={message}/>
              <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
};

Greeter.propTypes = {
  name : React.PropTypes.string,
  message : React.PropTypes.string
};

Greeter.defaultProps = { // static
    name : 'Harry',
    message : 'This is default message'
};


ReactDOM.render( 
    <Greeter />, 
    document.getElementById("app")
);