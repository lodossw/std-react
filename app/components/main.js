import React, {Component} from 'react';
import Nav from 'nav'; 

class Main extends Component {
    render() {
        return (
            <div> 
                <Nav/>
                <h1>Main Component</h1>
                {this.props.children}
            </div> 
        );
    }
}


export default Main; 