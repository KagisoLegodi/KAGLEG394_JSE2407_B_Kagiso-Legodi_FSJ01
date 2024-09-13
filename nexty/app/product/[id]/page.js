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
