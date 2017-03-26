import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import styles from './css/topNavigation.css'

const MenuItem = ({to, children, active}) => (

    /*
    <Link to={to} className={styles['menu-item']} activeClassName={styles.active} activeStyle={{fontFamily:'vernada'}}> 
        {children}
    </Link>
    */

    <Link to={to} className={styles['menu-item'] + ( active ? ' ' + styles.active : '' )} activeClassName='fired'>
      {children}
    </Link>
);


//-- IndexLink 를 사용하면 IndexRoute 의 active class 가 처음에만 활성화됨 ^^;

class TopNavigation extends Component {

    static contextTypes = {
        router : React.PropTypes.object
    } 

    render() {

        var {router} = this.context; 

        return (
            <div>
                <div className={styles.logo}>
                    Wheather 1.0
                </div>
                <div className={styles.menu}>
                    <MenuItem to="/" active={router.isActive('/', true)}>Home</MenuItem>
                    <MenuItem to="/weather" active={router.isActive('/weather', true)}>Weather</MenuItem> 
                    <MenuItem to="/posts" active={router.isActive('/posts', true)}>Post</MenuItem> 
                    <MenuItem to="/about" active={router.isActive('/about', true)}>About</MenuItem>
                </div>
            </div> 
        );
    }
};



export default TopNavigation; 