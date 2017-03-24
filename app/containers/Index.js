//React-router v3
import React, {Component} from 'react'; 
import Header from 'Header';

class Index extends Component {
    render() {
        return (
            <div>
               <Header/>
               {this.props.children}
            </div> 
        );
    }
}

export default Index;