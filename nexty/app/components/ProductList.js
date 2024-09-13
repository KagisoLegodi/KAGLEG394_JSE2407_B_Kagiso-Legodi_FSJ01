import Image from "next/image";
import Link from "next/link";

export default function ProductList({ product }) {
  return (
    <Link
      href={"/product/${product.id}"}
      className="block p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={320}
        height={320}
        className="object-contain w-full h-48 mb-4"
      />
      <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700">{product.category}</p>
        <p className="text-blue-500 font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}
