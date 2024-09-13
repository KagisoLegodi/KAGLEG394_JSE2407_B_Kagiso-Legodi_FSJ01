"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.title}
          width={320}
          height={320}
          className="rounded-t-lg object-contain w-full h-64"
        />
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
            >
              &gt;
            </button>
          </>
        )}
      </div>
      <div className="px-5 pb-5">
  <Link href={`/product/${product.id}`}>
    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
      {product.title}
    </h5>
  </Link>
  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
    {product.description}
  </p>

}
