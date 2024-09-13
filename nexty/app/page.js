"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://next-ecommerce-api.vercel.app/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      {loading ? <p>Loading...</p> : <p>Complete...</p>}
    </section>
  );
}