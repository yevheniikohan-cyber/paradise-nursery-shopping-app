import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <a href="#">Home</a> | <a href="#">Plants</a> | <a href="#">Cart 🛒 ({total})</a>
    </nav>
  );
}

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 12, img: "https://via.placeholder.com/100" },
      { id: 4, name: "Spider Plant", price: 8, img: "https://via.placeholder.com/100" },
      { id: 5, name: "Fern", price: 9, img: "https://via.placeholder.com/100" },
      { id: 6, name: "ZZ Plant", price: 14, img: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 7, name: "Rose", price: 20, img: "https://via.placeholder.com/100" },
      { id: 8, name: "Tulip", price: 18, img: "https://via.placeholder.com/100" },
      { id: 9, name: "Lavender", price: 16, img: "https://via.placeholder.com/100" },
      { id: 10, name: "Sunflower", price: 11, img: "https://via.placeholder.com/100" },
      { id: 11, name: "Daisy", price: 7, img: "https://via.placeholder.com/100" },
      { id: 12, name: "Marigold", price: 6, img: "https://via.placeholder.com/100" }
    ],
    Succulents: [
      { id: 13, name: "Echeveria", price: 10, img: "https://via.placeholder.com/100" },
      { id: 14, name: "Haworthia", price: 9, img: "https://via.placeholder.com/100" },
      { id: 15, name: "Crassula", price: 11, img: "https://via.placeholder.com/100" },
      { id: 16, name: "Sedum", price: 8, img: "https://via.placeholder.com/100" },
      { id: 17, name: "Agave", price: 13, img: "https://via.placeholder.com/100" },
      { id: 18, name: "Cactus Mix", price: 12, img: "https://via.placeholder.com/100" }
    ]
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <Navbar />

      <h1>Plant Shop</h1>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map(plant => (
            <div key={plant.id}>
              <img src={plant.img} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAdd(plant)}
                disabled={addedToCart[plant.name]}
              >
                {addedToCart[plant.name] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
