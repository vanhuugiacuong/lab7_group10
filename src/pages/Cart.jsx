import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Giỏ hàng của bạn 🛒</h2>
      
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border rounded p-2 mb-2 flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <button
                  className="text-red-500 font-bold"
                  onClick={() => removeFromCart(item.id)}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>

          <button
            className="mt-4 bg-red-500 text-white px-4 py-1 rounded"
            onClick={clearCart}
          >
            Xoá tất cả
          </button>
        </>
      )}

      <Link to="/" className="block mt-4 text-blue-500">← Tiếp tục mua hàng</Link>
    </div>
  );
}
