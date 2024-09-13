export default function ProductList({ product }) {
    return (
      <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-500 font-semibold">${product.price}</p>
      </div>
    );
  }
  