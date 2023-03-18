import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";

const Navbar = () => {
  const stateItems=useSelector((state)=>state.cart);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
          <div className="container-fluid ">
            <Link className="navbar-brand " to='/'>
              <span className="logo text-dark fs-2 fw-bold">Shop</span>
              <span className="text-warning fs-3 fw-bold">Hub.</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex mx-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">
                  <BsSearch className="fs-5" />
                </button>
              </form>

              <ul className="navbar-nav fs-5 items ">
                <li className="nav-item ">
                  <Link className="nav-link"  aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/signup">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <div
              className="collapse navbar-collapse justify-content-end "
              id="navbarNav"
            >
              <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active  " aria-current="page" to="/cart">
                    <span className="fs-4 mt-1">Cart </span>
                    <FaShoppingCart className="fs-4 " />
                    <span className="cart-item bg-warning rounded-pill px-1">{stateItems.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
