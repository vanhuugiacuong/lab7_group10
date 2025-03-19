import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="p-4 bg-gray-200 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Shop</Link>
      <Link to="/cart" className="px-4 py-2 bg-blue-500 text-white rounded">
        Giỏ hàng 🛒 ({cartCount})
      </Link>
    </nav>
  );
}
