import React, {Component} from 'react'; 
import styles from './BigText.css';

/* const */
/*
const BigText = ({children}) => (
    <div className="big-text">
        {children}
    </div>
);
*/

class BigText extends Component {
    render() {
        return (
            <div className={styles['big-text']}>
                {this.props.children}
            </div>
        );
    }
};

export default BigText; 