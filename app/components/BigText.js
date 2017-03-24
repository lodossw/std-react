import React, {Component} from 'react'; 
import './BigText.css';

/* const */
const BigText = ({children}) => (
    <div className="big-text">
        {children}
    </div>
);

/*
class BigText extends Component {
    render() {
        return (
            <div className="big-text">
                {children}
            </div>
        );
    }
};
*/

export default BigText; 