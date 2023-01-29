import {combineReducers } from 'redux';
import {configureStore} from "@reduxjs/toolkit";

const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return [...action.payload]
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    formData: formDataReducer,
    products: productsReducer
});

const store = configureStore(rootReducer);

export const setFormData = data => {
    return {
        type: 'SET_FORM_DATA',
        payload: data
    }
}

export const setProducts = products => {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    }
}

