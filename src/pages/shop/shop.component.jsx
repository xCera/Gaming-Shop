import React from 'react'
import './shop.styles.scss'
import SHOP_DATA from './shop.data'
import ShopItems from '../../components/shop-items/shop-items.component'

class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections:SHOP_DATA     
        }
    }

    render(){
        return(
            <div className="shop">
                {this.state.collections.map(({id, ...otherCollectionProps}) => {
                    return <ShopItems key={id} {...otherCollectionProps}></ShopItems>
                })}
            </div>
        )
    }
  
    
}

export default Shop;