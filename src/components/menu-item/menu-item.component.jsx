import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, color}) =>{
    return(
        <div className={`${size} menu-item`}>
            <div className='bg-img' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className={`${color} overlay`}></div>
            </div>
             <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Buy Now</span>
            </div>
       </div>
    )
}

export default MenuItem
