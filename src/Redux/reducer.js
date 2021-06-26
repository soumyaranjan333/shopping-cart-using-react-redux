import { products } from './states'
import { SORT_PRODUCT, FILTER_PRODUCT, ADD_PRODUCT,REMOVE_PRODUCT } from './actions'


export let reducer = (state = products, action) => {
    console.log(state)
    // console.log(products.products)
    switch (action.type) {
        case SORT_PRODUCT:

            break;

        case FILTER_PRODUCT:
            return {
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            };
            break;

        case ADD_PRODUCT:

            const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cartItems.find((item) => item.id === action.payload.id ? true : false)
            console.log(state)
            console.log(item)
            console.log(inCart)
            console.log(action.payload.id)
            
            return {
                ...state,
                cartItems: inCart ? 
                state.cartItems.map((item) => 
                item.id === action.payload.id
                ? { ...item, qty: item.qty + 1}
                :item
                )
                 : [...state.cartItems, { ...item, qty: 1 }]
                }
              
        
            case REMOVE_PRODUCT:
                return{
                    ...state,
                    cartItems:state.cartItems.filter((item)=>item.id !== action.payload.id)
                }
                break;    
    }
    return state
}
