import React from 'react'
import styles from "./Home.module.css"
import ProductList from './ProductList'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <>
      <form action="" className={styles.form}>
        <input type="search" name="" id='' placeholder='What do you want ?' className={styles.search} />
        <button type='submit' className={styles.myBtn}>Search</button>
      </form>
      <div className={`container ${styles.categories}`}>
        <button className={styles.button}>All</button>
        <button className={styles.button}>Tablet</button>
        <button className={styles.button}>Laptop</button>
        <button className={styles.button}>Smart Phone</button>
        <button className={styles.button}>Watch</button>
      </div>

      <ProductList />
      {/* <ProductCard /> */}

    </>
  )
}

export default Home