import { createStore, combineReducers, applyMiddleware } from 'redux'
import { productsReducer } from './reducers/productReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { thunk } from 'redux-thunk'
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';


const rootReducer = combineReducers({
   products: productsReducer,
   singleProduct: singleProductReducer,
   cart: cartReducer,
   categories: categoryReducer,
   productsByCategory: productsByCategoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
