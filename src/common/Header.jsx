import React from 'react'
import { ShoppingBag,ShoppingCart } from 'lucide-react';

const Header = () => {

  const cart= JSON.parse(localStorage.getItem("cartItems")) || [];
  console.log(cart.length)
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top" style={{zIndex:999999}}>
  <div className="container">
    <a className="navbar-brand" href="#"> 
        <span><ShoppingBag /></span>
         Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>

         <li className="nav-item mx-3 px-3 border-start">
          <a className="nav-link text-primary" href="#">
            <ShoppingCart /> {cart.length}
          </a>
        </li>
      
      </ul>
      
    </div>

   
  </div>
</nav>
    </>
  )
}

export default Header