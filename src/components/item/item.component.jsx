import React from 'react'
import './item.styles.scss'

const Item = ({name, posterUrl, bgUrl, price, color}) =>{
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
            </div>
    )
}

export default Item