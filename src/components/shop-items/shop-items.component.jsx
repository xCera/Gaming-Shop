import React from 'react'
import './shop-items.styles.scss'
import Item from '../item/item.component'

const ShopItems = ({color, items}) =>{
    return(
        <div className='shop-items'>
            <div className='items'>
                {items
                .filter((item,idx) => idx < 4)
                .map(item =>{
                    return <Item color={color} key={item.id} item={item}></Item>
                })}
            </div>
        </div>
    )
}

export default ShopItems