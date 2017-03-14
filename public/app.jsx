var Greeter = React.createClass({
    render: function(){
        return (
            <div>
              <h1>Hello Component (React.createClass) </h1>
              <p>This is From A-Component</p>
            </div>
        );
    }
});

ReactDOM.render(
   <Greeter/>,
   document.getElementById("app")
);
