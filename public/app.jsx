class Greeter extends React.Component {

    //-- 생성자 
    constructor(props) {

        super(props);
        
        this.defaultProps = {
            name : 'Mary',
            message : 'oops!'
        };

        //console.log(!this.props.age);
        //-- 기본 State 값 
        this.state = {
            name : this.props.name
        }; // getDefaultState() on React.createClass() only

        // EventHandler 등록 
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    //-- Button Click Event Handler 
    onButtonClick(event) {
        
        event.preventDefault();

        var nameRef = this.refs.name; 
        var name = nameRef.value;
        nameRef.value = ''; // submit 후 값 비우기 

        if( typeof name == 'string' && name.length > 0) {
            this.setState({ name : name })
        }

        // this.props.message = "이거되냐?"; error props 는 읽기전용 속성임.
    } 

    render() {
        var name = this.state.name;
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

Greeter.getDefaultProp = {
  name: 'Mary',
  message: 'oops!'
};
*/

class Test extends React.Component {
    render() {
        return (
            <div>
                <Greeter name={firstName} message="Message from prop!" />
                {/*<Greeter name={firstName} message="Message from prop!" />
                <Greeter name={firstName} message="Message from prop!" />*/}
            </div>
        )
    }
};

var firstName = 'killer'; 

ReactDOM.render( 
    <Test/>, 
    document.getElementById("app")
);