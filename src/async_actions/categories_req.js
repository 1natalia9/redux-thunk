import { loadCategoriesAction } from "../store/reducers/categoryReducer";


export const getCategories = (dispatch) => {
    fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((json) => dispatch(loadCategoriesAction(json)))
};