import { loadProducts } from "../store/reducers/productReducer";
import { loadSingleProduct } from "../store/reducers/singleProductReducer";
import { loadProductsBycategory } from "../store/reducers/productsByCategoryReducer";

export const getProducts = (dispatch) => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((json) => dispatch(loadProducts(json.products)))
};

export const getSingleProduct = (id) => {
    return dispatch => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSingleProduct(json)))
    }
}
 
export const getProductsByCategory = (category) => {
    return dispatch => {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsBycategory(json.products)))
    }
}

