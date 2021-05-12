import { createSlice } from '@reduxjs/toolkit';

export const compareSlice = createSlice({
    name: "compare",
    initialState: [],
    reducers: {
        addProductToCompare: (state, action) => {

            if (state.includes(action.payload)) {
                const serialObj = JSON.stringify([...state]);
                localStorage.setItem("compare", serialObj);
                return [...state]
            }else {
                const serialObj = JSON.stringify([...state, action.payload]);
                localStorage.setItem("compare", serialObj);
                return ([...state, action.payload] )
            }
        }

    }
});

export const {
    addProductToCompare,
} = compareSlice.actions;
