import React from 'react'
import {initialProducts} from '../Data/product';
import ProductCard from './ProductCard';
import styles from "./ProductList.module.css"

const ProductList = () => {
  return (
   <>
     <div className={styles.card1}>
      {initialProducts.map((product)=> {
       
       return (
        <ProductCard product= {product} />
       )
     }

     )}
     </div>
   
   </>
  )
}

export default ProductList