import { combineReducers } from '@reduxjs/toolkit';

import {cartSlice} from "../../client/cart/reducer/cartReducer";
import {compareSlice} from "../../client/compare/reducer/comparePageReducer";

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    compare: compareSlice.reducer


});

export default rootReducer;
