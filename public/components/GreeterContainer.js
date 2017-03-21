'use strict';

import React from 'react';
import GreeterMessage from './GreeterMessage'; 
import GreeterForm from './GreeterForm'; 

class GreeterContainer extends React.Component {
    render() {
        return (
            <div>
                <GreeterMessage name='lodossw'/>
                <GreeterForm />
            </div>
        );
    }
}

// es6
export default GreeterContainer;