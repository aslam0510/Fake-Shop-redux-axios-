import { combineReducers } from 'redux';
import { productReducer, selectedProduct } from './productReducer';

export  const reducers = combineReducers({
   allProducts : productReducer,
   product : selectedProduct
})