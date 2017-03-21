import React,{Component} from 'react';
import ReactDOM from 'react-dom';


var obj1 = {
    name : 'lodossw',
    location : 'seoul'
};

var obj2 = {
    age : 25,
    ...obj1 = {name:'lee jongseok', location:'Busan', nation:'korea'}
}

console.log(obj1); 
console.log(obj2,{obj1}); 

class Test extends Component {
    render() {
        var name = 'name';
        return (
            <h1>{name}</h1>
        );
    }
}

ReactDOM.render(
    <Test/>,
    document.getElementById("app") 
);
