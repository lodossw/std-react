import React, {Component} from 'react'; 

import {
    TopNavigation
} from '../components'

class MainController extends Component {
    render() {
        return (
            <div>
              <TopNavigation />
              {this.props.children}
            </div>
        );
    }    
};

export default MainController; 