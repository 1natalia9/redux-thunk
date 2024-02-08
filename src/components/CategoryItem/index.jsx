import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoryItem({ category }) {

const category_up = category[0].toUpperCase() + category.slice(1);

const category_route =`/categories/${category}`

  return (
    <div className={s.category_item}>
      <Link to={category_route}>
      { category_up }
      </Link>
    </div>
  )
}
