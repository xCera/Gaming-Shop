import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import './header.styles.scss'

import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) =>{
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
                    <CartIcon></CartIcon>    
                    <img className='profile-icon' src={`${currentUser.photoURL ? currentUser.photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}`} alt={currentUser.displayName}></img>
                </div>
                : <div className='sub-options'><Link className='option' to='/login'>Sign in</Link> <CartIcon></CartIcon> </div>
                }
                            
           </div>
          {
              hidden ? null :
              <CartDropdown></CartDropdown>
          }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
     currentUser:selectCurrentUser,
     hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);