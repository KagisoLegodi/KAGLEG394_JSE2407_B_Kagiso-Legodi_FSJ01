"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

async function getProduct(productId) {
  const res = await fetch(
    `https://next-ecommerce-api.vercel.app/products/${productId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

const ProductDetailPage = ({ params }) => {
    const { id: productId } = params;
  
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const productData = await getProduct(productId);
            setProduct(productData);
            setMainImage(productData.thumbnail); // Set the initial main image
          } catch (err) {
            setError("Failed to fetch product data.");
          }
        };
      
        fetchProduct();
      }, [productId]);
      if (error) {
        return <p className="text-red-500 text-center mt-4">{error}</p>;
      }
      if (!product) {
        return <p className="text-gray-500 text-center mt-4">Product not found.</p>;
      }
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8 dark:text-gray-200">
          {/* Back to Products */}
          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
            &larr; Back to Products
          </Link>
      
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Main Image */}
            <div className="flex flex-col items-center">
              <Image
                src={mainImage}
                alt={product.title}
                width={480}
                height={480}
                className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300"
                priority
              />
              <h1 className="text-3xl font-bold mt-6 dark:text-white">
                {product.title}
              </h1>
            </div>
      {/* Image Gallery */}
{product.images && product.images.length > 0 && (
    <div className="mt-6 flex space-x-4 overflow-x-auto">
      {product.images.map((img, index) => (
        <div
          key={index}
          className="w-24 h-24 cursor-pointer rounded-lg overflow-hidden"
          onClick={() => setMainImage(img)}
        >
          <Image
            src={img}
            alt={`Product image ${index + 1}`}
            width={96}
            height={96}
            className="object-contain hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  )}
