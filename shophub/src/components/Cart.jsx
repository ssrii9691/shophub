import React from "react";
import { FaReply } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addItemAction,
  decreaseQuantityAction,
  deleteItemFromStateAction,
} from "../store/actions/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(addItemAction(item));
  };

  const decreseQuantity = (item) => {
    dispatch(decreaseQuantityAction(item));
  };

  const deleteItem = (item) => {
    dispatch(deleteItemFromStateAction(item));
  };

  const navigate = useNavigate();
  const gotocheckout = () => {
    navigate("/checkout");
  };

  const gotoProducts = () => {
    navigate("/products");
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div className="container my-3 py-3" key={item.id}>
          <div className="row">
            <div className="col-md-5 my-3">
              <img src={item.image} alt={item.title} height={200} />
            </div>
            <div className="col-md-7 my-3">
              <h4 className="text-uppercase">{item.category}</h4>
              <h1 className="lead">{item.title}</h1>
              <h1 className="p5">
                price={item.qty}x{item.price}=${item.qty * item.price}
              </h1>
              <p>{item.description}</p>
              <p className="my-3 py-3">
                Quantity:
                <button
                  className="border-0 px-2 h4 mx-2"
                  onClick={() => {
                    decreseQuantity(item);
                  }}
                >
                  -
                </button>
                <span className="box">{item.qty}</span>
                <button
                  className="border-0 px-2 h4 mx-2"
                  onClick={() => {
                    increaseQuantity(item);
                  }}
                >
                  +
                </button>
              </p>
              <button
                className="btn btn-secondary remove-btn"
                onClick={() => {
                  deleteItem(item);
                }}
              >
                Remove
              </button>
            </div>
            <hr />
          </div>
        </div>
      ))}

      <div className="text-center mb-5">
        {cartItems.length ? (
          <button
            className="btn btn-outline-warning btn-lg"
            onClick={gotocheckout}
          >
            Check Out Here
          </button>
        ) : (
          <div className="container my-5">
            <div className="row">
              <div className="cart-empty">
                <h3>Cart is Empty ....!</h3>
                <button className="back" onClick={gotoProducts}>
                  <FaReply />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
