var Greeter = React.createClass({
    render: function(){
        return React.createElement(
            'h1',
            null,
            'Hello Component (ES5)'
        );
        /*(
            
            
            <div>
              <h1>Hello Component (React.createClass) </h1>
              <p>This is From A-Component</p>
            </div>
            
        );*/
    }
});

ReactDOM.render(React.createElement(Greeter, null), document.getElementById("app"));
