class Greeter extends React.Component {

    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event) {
        event.preventDefault();
        var name = this.refs.name.value; 
        alert(name);
    } 

    render() {
        var name = this.props.name;
        var message = this.props.message; 
        
        return ( 
            <div>
              <h1>Hello {name}!!</h1>
              <h1>{message + '!!'}</h1>
              
              {/*<form onSubmit={(event) => this.onButtonClick(event)}*/}
              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
              </form> 
            
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


ReactDOM.render( 
    <Greeter message="Message from prop!" />, 
    document.getElementById("app")
);