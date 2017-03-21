'use strict';

import React from 'react';

class GreeterForm extends React.Component {

    constructor(props) {
        super(props); 
    }

    onSubmit() {

    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" /> <button>Submit</button> <br/>
               </form>
            </div>
        );
    }
}

export default GreeterForm;