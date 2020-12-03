import React from 'react'
import './menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {selectMenuSecitons} from '../../redux/menu/menu.selector'
import {createStructuredSelector} from 'reselect'

const Menu = ({sections}) =>{
        return(
            <div className='menu'>
                    {sections.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    })}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSecitons
})

export default connect(mapStateToProps)(Menu);
