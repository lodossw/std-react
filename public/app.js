class Greeter extends React.Component {
    render() {
        return ( 
            <div>
              <h1>Hello React (with class)</h1>
              <p>This is From B-Component</p> 
            </div>
        );
    }
}

ReactDOM.render( <Greeter/>, document.getElementById("app"));