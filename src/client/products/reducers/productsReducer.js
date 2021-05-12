import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED} from './actionTypes'

const initialState = {
    pager: {},
    products: [],
    errors: null,
    loading: false
}

export const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, loading: true}
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                products: payload.result, 
                pager: payload.pager}
        case FETCH_PRODUCTS_FAILED:
            return {
                ...state, 
                loading: false, 
                errors: payload}
        default:
            return state;
    }
}

// FETCH_P