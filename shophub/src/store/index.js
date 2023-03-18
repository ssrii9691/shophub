import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReduce";
import userReducer from "./reducers/userReducer";
import thunk from 'redux-thunk'

export const store=configureStore({
    reducer:{
        cart:cartReducer,
        users:userReducer
    },
    middleware:[thunk]
})