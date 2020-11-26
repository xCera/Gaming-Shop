import React from 'react'
import {Link} from 'react-router-dom'


import './header.styles.scss'

const Header = () =>{
    return(
        <div className='header'>
           <Link className='logo' to='/'>G-Shop</Link>
           <div className='options'>
                <Link className='option' to='/shop'>Store</Link>
                <Link className='option' to='/shop'>Contact</Link>
                <Link className='option' to='/login'>Sign in</Link>
           </div>
        </div>
    )
}

export default Header;