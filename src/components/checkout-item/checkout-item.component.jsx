import React from 'react'

import './checkout.styles.scss'

const CheckoutItem = ({cartItem:{name, posterUrl, price, quantity}}) =>(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={posterUrl} alt='item' />
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}rsd</span>
            <div className='remove-button'>
                &#10005;
            </div>
    </div>
)

export default CheckoutItem;