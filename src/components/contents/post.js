import React, {Component} from 'react';
import styles from './css/style.css';   

class Post extends Component {
    render() {
        return (
            <div>
                <h1 className={styles['big-text']}>Post</h1>
            </div>
        );
    }
};

export default Post; 