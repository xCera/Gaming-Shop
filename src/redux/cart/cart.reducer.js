import CartActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'
import {removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const CartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            } 
            break;
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }

            break;
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            } 
            break;
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            } 
               
            break;
            
            default:
                return state;
    }
}

export default CartReducer;