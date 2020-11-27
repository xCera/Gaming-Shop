import React from 'react'
import './homepage.styles.scss'
import Menu from '../../components/menu/menu.component'

const HomePage = (props) =>{
    return(
        <div className='homepage'>
            <Menu></Menu>
        </div>
    )
}

export default HomePage;