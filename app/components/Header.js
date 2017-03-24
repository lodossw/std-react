import React, {Component} from 'react'; 
import {Link} from 'react-router';

import styles from './Header.css';

//-- Template Liternal 문법 숙지 
const MenuItem = ({active, children, to}) => (
    <Link to={to} className={styles["menu-item"] + (active ? " " + styles.active : "")}>  
        {children}
    </Link>
);

class Header extends Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    render(){
        
        var {router} = this.context;

        return(
            <div>
                <div className={styles.logo}>
                    Hello
                </div>
                <div className={styles.menu}>
                    <MenuItem to="/" active={router.isActive('/', true)}>홈</MenuItem>
                    <MenuItem to="/about" active={router.isActive('/about', true)}>소개</MenuItem> 
                    <MenuItem to="/posts" active={router.isActive('/posts', true)}>포스트</MenuItem>
                </div>
            </div> 
        );
    };
}

export default Header; 