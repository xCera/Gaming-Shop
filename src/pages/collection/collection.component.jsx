import React from 'react'

import Item from '../../components/item/item.component'
import {selectCollection} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux'
import './collection.styles.scss'

const CollectionPage = ({collection}) =>{
    const {title, color, items} = collection;
    return(
        <div className='collection-page'>
        <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <Item key={item.id} color={color} item={item}></Item>)
                }
            </div>
        </div>
    )

}


const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);