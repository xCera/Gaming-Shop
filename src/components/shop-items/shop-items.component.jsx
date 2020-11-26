import React from 'react'
import './shop-items.styles.scss'
import Item from '../item/item.component'

const ShopItems = ({color, items}) =>{
    return(
        <div className='shop-items'>
            <div className='items'>
                {items.map(({id, ...otherItemProps}) =>{
                    return <Item color={color} key={id} {...otherItemProps}></Item>
                })}
            </div>
        </div>
    )
}

export default ShopItems