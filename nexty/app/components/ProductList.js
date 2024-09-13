export default function ProductList({ product }) {
    return (
      <div className="border p-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-blue-500">${product.price}</p>
      </div>
    );
  }
  