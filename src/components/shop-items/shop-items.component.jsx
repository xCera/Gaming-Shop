import React from 'react'
import './shop-items.styles.scss'
import Item from '../item/item.component'

const ShopItems = ({title, items}) =>{
    return(
        <div className='items'>
            {items.map(({id, ...otherItemProps}) =>{
                return <Item key={id} {...otherItemProps}></Item>
            })}
        </div>
    )
}

export default ShopItems