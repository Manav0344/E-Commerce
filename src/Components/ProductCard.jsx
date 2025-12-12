import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const addtoCart = (id, name) => {
    console.log("Added To Cart:", id, name);

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; 

    const existingItemIndex = cartItems.findIndex(
      item => item.id === id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ id, name, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <>
      <div className="main-card mt-5">
        <div
          className={`container ${styles.card}`}
          style={{ width: "18rem", cursor: "pointer" }}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img src={product.image} className="card-img-top" alt={product.name} />

          <div className={`card-body  ${styles["card-body"]}`}>
            <h5 className="card-title">{product.name}</h5>
           
            <div className='d-flex justify-content-between align-items-center p-3 mt-3'>
              <p className="card-text">
              <strong>₹{product.price}</strong>
            </p>

            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                addtoCart(product.id, product.name);
              }}
            >
              Add To Cart
            </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
