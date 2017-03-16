class HomeWorkPresentation extends React.Component {

    render() {

        var name = this.props.name; 
        var message = this.props.message; 

        return ( 
                <div>
                    <h1>{name}</h1>
                    <span>{message}</span>
                    <br/>
                </div>
        );
    }

}


class HomeWorkForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this); 
    }

    onFormSubmit(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        this.props.onSendMessage( name, message );
    } 

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/><br/>
                <textarea ref="message"/>
                <button>Go!!</button>
            </form> 
        );
    }
}

class HomeWork extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name : this.props.name, 
            message : this.props.message 
        };

        this.state = {
            name : this.props.name,
            message : this.props.message 
        };

        this.handleHomeworkForm = this.handleHomeworkForm.bind(this);
    }

    handleHomeworkForm(name, message) {
        console.log(name + '--' + message);
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
              <HomeWorkPresentation name={name} message={message} />
              <HomeWorkForm onSendMessage={this.handleHomeworkForm}/>
            </div>
        );

    }

}

HomeWork.defaultProps = {
    name : 'This is default name',
    message : 'this is default message'
}


ReactDOM.render(<HomeWork/>, document.getElementById('app'));