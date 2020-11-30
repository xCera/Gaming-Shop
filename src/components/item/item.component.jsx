import React from 'react'
import './item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const Item = ({item, color, addItem}) =>{
    const {name, posterUrl, bgUrl, price} = item;
    return(
            <div className='item'>
                <img className='poster' src={posterUrl} alt={name}></img>
                <div className='bg-img' style={{backgroundImage: `url(${bgUrl}`}}>
                    <div className={`${color} overlay`}></div>
                </div>
                <h4 className='price'>{price}RSD</h4>
                <div className='content'>
                    <h3>{name}</h3>
                </div>
                <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
            </div>
    )
}


const mapDispathToProps = disptch => ({
    addItem:item => disptch(addItem(item))
})


export default connect(null, mapDispathToProps)(Item);