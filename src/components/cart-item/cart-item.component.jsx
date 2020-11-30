import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({item:{name, posterUrl, price, quantity}}) => (
    <div className='cart-item'>
         <img src={posterUrl} alt='item'></img>
         <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}RSD</span>
         </div>
    </div>
)

export default CartItem;