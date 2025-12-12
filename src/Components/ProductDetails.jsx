import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { initialProducts } from "../Data/product";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = initialProducts.find(
    (item) => item.id === Number(id)
  );


  const addtoCart = (id, name) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ id, name, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log("Added To Cart:", id, name);
  };

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <>
      <button 
          className={styles.backBtn} 
          onClick={() => navigate(-1)}
        >
          ← Back to Products
        </button>
   
    <div className={styles.container}>

       
      
      <div className={styles.imageBox}>
        

        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.name}>{product.name}</h2>

        <p className={styles.brand}>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p className={styles.description}>{product.description}</p>

        <p className={styles.price}>
          <strong>Price:</strong> ₹{product.price}
        </p>

        <p className={styles.rating}>
          ⭐ {product.rating} ({product.reviews} reviews)
        </p>

        <p className={styles.stock}>
          <strong>Stock:</strong>{" "}
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <p className={styles.warranty}>
          <strong>Warranty:</strong> {product.warranty}
        </p>

        <div className={styles.features}>
          <strong>Features:</strong>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <button
          className={styles.backBtn}
          onClick={() => addtoCart(product.id, product.name)}
        >
          Add To Cart
        </button>

      </div>
    </div>
    
    </>
    
  );
};

export default ProductDetails;
