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
console.log(obj2); 

ReactDOM.render(
    <h1>Boilerpate app!!</h1>,
    document.getElementById("app") 
);
