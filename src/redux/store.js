import {configureStore} from '@reduxjs/toolkit'
import quantityReducer from './feature/Quantity/quantitySlice'
export default configureStore({
    reducer:{
        quantity:quantityReducer
    }
})