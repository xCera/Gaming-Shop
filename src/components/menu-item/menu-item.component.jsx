import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, color, history, linkUrl, match}) =>{
    return(
        <div onClick={()=> history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
            <div className='bg-img' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className={`${color} overlay`}></div>
            </div>
             <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Explore</span>
            </div>
       </div>
    )
}

export default withRouter(MenuItem); 
