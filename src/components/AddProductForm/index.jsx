import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/reducers/productReducer' 

export default function AddProductForm() {

    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault();
        const {title, description, price} = e.target;

        const submit = {
            id: Date.now(),
            title: title.value,
            description: description.value,
            price: +price.value
        }
        dispatch(addProduct(submit));
        e.target.reset();
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name='title' placeholder='title'/>
        <input type="text" name='description' placeholder='description'/>
        <input type="text" name='price' placeholder='price'/>
        <button>Add</button>
    </form>
  )
}
