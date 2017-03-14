var Greeter = React.createClass({
    
    getDefaultProps : function(){
        return {
            name : "Harry"
        };
    },
    render : function() {
        var name = this.props.name; 
        return (
            <h1>Hello {name}!!</h1>
        );
    }

});

ReactDOM.render(
 <Greeter name="Marry"/>,
 document.getElementById("app")
);