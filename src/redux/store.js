import {configureStore} from '@reduxjs/toolkit'
import quantityReducer from './feature/Quantity/quantitySlice'
import OrderReducer from './feature/order/Orders'
import totalReducer from './feature/total/totalSlice'
import globalstate from './Global/globalstate'
export default configureStore({
    reducer:{
        quantity:quantityReducer,
        orders: OrderReducer,
        total:totalReducer,
        Gstate:globalstate
        
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())