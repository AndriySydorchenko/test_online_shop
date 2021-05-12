import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        deletingId: null
    },
    reducers: {
        addProduct: (state, action) => {
            // const serialObj = JSON.stringify([...state.products, action.payload]);
            // localStorage.setItem("cart", serialObj);
            const id = action.payload.id;
            const isProduct = state.products.findIndex( product => product.id===id);
            if(isProduct<0) {
                const serialObj = JSON.stringify([...state.products, action.payload]);
                localStorage.setItem("cart", serialObj);
                return {...state, products: [...state.products, action.payload]}
            } else {
                const newProducts = state.products.map( product =>{
                    const newProduct = {...product}
                    if(newProduct.id===id) {
                        newProduct.count++
                    }

                    return newProduct
                })
                const serialObj = JSON.stringify(newProducts);
                localStorage.setItem("cart", serialObj);
                return {...state, products: newProducts}
            }

        } ,
        setCountStore: (state, action) => {
            const products = state.products.map( (product) => {
                if(product.id===action.payload.id) return {...product, count: action.payload.count}
                else return product
            })
            const serialObj = JSON.stringify(products);
            localStorage.setItem("cart", serialObj);
            return {...state, products: [...products]}
        },
        setDeletingItem: (state, action) => ({...state, deletingId: action.payload}),
        deleteProduct: (state, action) => {
            if (state.deletingId) {
                const newProducts = state.products.filter( product => product.id !== state.deletingId);
                const serialObj = JSON.stringify(newProducts);
                localStorage.setItem("cart", null);
                return {products: newProducts, deletingId: null}
            } else {
                return {...state, deletingId: null}
            }

        },

    }
});

export const {
    addProduct,
    setCountStore,
    setDeletingItem,
    deleteProduct
} = cartSlice.actions;
