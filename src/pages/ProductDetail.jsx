import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Thông tin chi tiết sản phẩm {id}</h2>
      <p className="mt-2">Thông tin mô tả chi tiết của sản phẩm {id} sẽ ở đây.</p>

      <div className="mt-4">
        <Link to="/" className="px-3 py-1 bg-gray-300 rounded">← Quay lại danh sách</Link>
      </div>
    </div>
  );
}
