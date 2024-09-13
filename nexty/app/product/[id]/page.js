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
      