class Greeter extends React.Component {
    render() {
        return ( 
            <div>
              <h1>Hello React (ES6)</h1>
            </div>
        );
    }
}

ReactDOM.render( <Greeter/>, document.getElementById("app"));