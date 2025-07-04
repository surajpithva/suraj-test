import React from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, deleteFromCart } = useCart();

  const grandTotal = Math.round(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">My Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-left border-t border-b">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-contain rounded"
                      />
                      <span className="font-medium">{item.title}</span>
                    </td>
                    <td className="p-3 font-semibold">₹ {item.price}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, "dec")}>
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, "inc")}>
                          <FiPlus />
                        </button>
                      </div>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="text-right">
              <h3 className="text-xl font-semibold">Grand Total:</h3>
              <p className="text-2xl font-bold text-green-700">₹ {grandTotal}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
