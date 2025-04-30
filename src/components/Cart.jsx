import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.HandleCart);
  const dispatch = useDispatch();

  const getNumericPrice = (price) => {
    return typeof price === 'string' 
      ? parseFloat(price.replace('$', '')) 
      : price;
  };

  const handleAddQty = (item) => {
    dispatch({ type: 'ADD_QTY', payload: item });
  };

  const handleDecQty = (item) => {
    if (item.qty > 1) {
      dispatch({ type: 'DEL_QTY', payload: item });
    } else {
      dispatch({ type: 'DEL_ITEM', payload: item });
    }
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: 'DEL_ITEM', payload: item });
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = getNumericPrice(item.price);
    const qty = item.qty || 0;
    return acc + (price * qty);
  }, 0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => {
            const itemPrice = getNumericPrice(item.price);
            
            return (
              <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${itemPrice.toFixed(2)}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => handleDecQty(item)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => handleAddQty(item)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="mt-2 text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-lg font-bold">
                  ${(itemPrice * item.qty).toFixed(2)}
                </div>
              </div>
            );
          })}

          <div className="text-2xl font-bold text-right mt-8">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;