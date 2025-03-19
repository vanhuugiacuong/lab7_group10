import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Sản phẩm 1" },
  { id: 2, name: "Sản phẩm 2" },
  { id: 3, name: "Sản phẩm 3" },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 border p-2 rounded flex justify-between">
            {product.name}
            <div>
              <Link to={`/product/${product.id}`} className="mr-2 px-3 py-1 bg-green-500 text-white rounded">
                Xem chi tiết
              </Link>
              <button
                className="px-3 py-1 bg-orange-500 text-white rounded"
                onClick={() => addToCart(product)}
              >
                Thêm vào giỏ
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

