import React, {Component} from 'react';
import styles from './css/style.css';   

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className={styles['big-text']}>
                  Home
                </h1>
            </div>
        );
    }
};

export default Home; 