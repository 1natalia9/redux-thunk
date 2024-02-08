import React from 'react'
import ProductItem from '../ProductItem';
import s from './index.module.css'

export default function ProductsContainer({ products_state }) {


  return (
    <div className={s.container}>
        {products_state.map((item) => (<ProductItem key={item.id} {...item}/>))}
    </div>
  )
}
