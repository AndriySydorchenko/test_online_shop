import axios from 'axios';
import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED} from './actionTypes'

const url = 'https://students-store-app.herokuapp.com/api/v1/products';

export const productsRequestCreator = (page=1, limit=3) => {
    const action = async (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_REQUEST});
        try {
            // https://students-store-app.herokuapp.com/api/v1/products?page=№&limit=3
            const fullURL = `${url}?page=${page}&limit=${limit}`
            const {data} = await axios.get(fullURL);
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: data});
        } catch (err) {
            dispatch({type: FETCH_PRODUCTS_FAILED, payload: err});
        }
    }
    return action;
}

// const productsService = new ProductsService();

// const fetchProducts = () => async (dispatch) => {
//   try {
//     dispatch(fetchProductsRequested());
//     const products = await productsService.fetchProducts();
//     dispatch(fetchProductsSuccess({ products }));
//   } catch (err) {
//     dispatch(fetchProductsFailure({ payload: err }));
//   }
// };