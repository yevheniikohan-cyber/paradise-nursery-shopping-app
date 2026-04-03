import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleIncrement(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleDecrement(item)}>-</button>

          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      <h2>Total Cart Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Coming Soon!")}>
        Checkout
      </button>

      <button onClick={() => window.location.href = "#"}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
