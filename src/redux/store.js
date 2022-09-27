import {configureStore} from '@reduxjs/toolkit'
import quantityReducer from './feature/Quantity/quantitySlice'
import checkoutReducer from './feature/checkout/checkout'
export default configureStore({
    reducer:{
        quantity:quantityReducer,
        orders: checkoutReducer
    }
})