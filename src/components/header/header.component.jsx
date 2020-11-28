import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import './header.styles.scss'

const Header = ({currentUser}) =>{
    return(
        <div className='header'>
           <Link className='logo' to='/'>G-Shop</Link>
           <div className='options'>
                <Link className='option' to='/shop'>Store</Link>
                <Link className='option' to='/shop'>Contact</Link>
                {
                currentUser ?
                <div className='sub-options'>
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    <img className='profile-icon' src={`${currentUser.photoURL ? currentUser.photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}`} alt={currentUser.displayName}></img>
                </div>
                : <Link className='option' to='/login'>Sign in</Link>
                }             
           </div>
        </div>
    )
}

const mapStateToProps = state =>({
     currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);