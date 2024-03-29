const LOAD_CATEGORIES = '[LOAD_CONTAINER] LOAD_CATEGORIES'

export const loadCategoriesAction = payload => ({ type: LOAD_CATEGORIES, payload });

export const categoryReducer = (state = [], action) =>
{
    if(action.type === LOAD_CATEGORIES){
        return action.payload
    } else {
        return state
    }
}