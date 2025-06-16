import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../store/cartSlice'
import BelowMenu from '../BelowDashboard/belowmenu'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleQuantityChange = (id, delta) => {
    // Quantity change logic can be added here if needed
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-auto">
      {/* Header */}
      <header className="flex items-center justify-between py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Cart</h1>
        <button
          onClick={handleClearCart}
          className="px-4 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          aria-label="Clear Cart"
        >
          Clear Cart
        </button>
      </header>

      {/* Main content: Cart items and summary */}

      <main className="flex flex-col lg:flex-row mt-6 gap-8 ">
        {/* Cart Items */}
        <section className="flex-1 min-w-[300px]">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-20">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4 w-[400px]">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Left: Image and details */}
                  <div className="flex items-start space-x-4 flex-1 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex flex-col">
                      <h2 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h2>
                      <p className="text-sm text-gray-600 truncate">NPR {item.price}</p>
                    </div>
                  </div>

                  {/* Right: Price and quantity controls */}
                  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                    <span className="text-gray-900 font-semibold whitespace-nowrap">
                      NPR {item.price * item.quantity}
                    </span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        &minus;
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Summary */}
        <aside className="w-full lg:w-80 bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-[200px] mb-10 md:ml-40 ">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
            <button
              onClick={handleClearCart}
              className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
              aria-label="Clear Cart"
            >
              Clear
            </button>
          </div>
          <div className="flex justify-between text-gray-900 font-semibold text-lg mb-4">
            <span>Total</span>
            <span>QTY: {totalQuantity}</span>
            <span>NPR {totalPrice}</span>
          </div>
          <button
            type="button"
            className="mt-auto w-full bg-red-600 text-white py-3 rounded-md text-center font-semibold hover:bg-red-700 transition"
            aria-label="Confirm Order"
          >
            Confirm Order
          </button>
        </aside>
      </main>

      <BelowMenu />
    </div>
  )
}

export default Cart
