const LOAD_PRODUCTS = '[PRODUCTS_BYCATEGORY] LOAD_PRODUCTS';

export const loadProductsBycategory = payload => ({ type: LOAD_PRODUCTS, payload});

export const productsByCategoryReducer = (state = [], action) => {
    if(action.type === LOAD_PRODUCTS){
        return action.payload
    } else {
        return state
    }
}
