import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Cart ({cartItems.length})
          </h1>

          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            🗑 Clear Cart
          </button>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              Your cart is empty 🛒
            </h2>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((foodItem) => (
              <div
                key={foodItem.card.info.id}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition duration-300"
              >
                {/* Left Side */}
                <div className="w-2/3">
                  <h2 className="text-xl font-bold mb-2">
                    {foodItem.card.info.name}
                  </h2>

                  <p className="text-green-600 font-semibold text-lg">
                    ₹
                    {(foodItem.card.info.price ||
                      foodItem.card.info.defaultPrice) / 100}
                  </p>

                  <p className="text-gray-500 mt-1">
                    {foodItem.card.info.category}
                  </p>
                </div>

                {/* Right Side */}
                {foodItem.card.info.imageId && (
                  <img
                    className="w-32 h-32 object-cover rounded-xl shadow"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                    alt={foodItem.card.info.name}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;