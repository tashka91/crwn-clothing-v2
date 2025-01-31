import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

const Navigation = () =>{
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
            </div>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/sign-in'>Login</Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
}

export default Navigation;