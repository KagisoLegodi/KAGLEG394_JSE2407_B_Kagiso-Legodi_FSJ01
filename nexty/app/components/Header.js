import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-600 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300"
        >
          Nexty E-Commerce
        </Link>

        <Link
          href="/wishlist"
          className="flex items-center space-x-1 hover:text-blue-200 transition duration-300"
        >
          <FaHeart className="text-lg" />
          <span>Wishlist</span>
        </Link>

        <Link
          href="/cart"
          className="flex items-center space-x-1 hover:text-blue-200 transition duration-300"
        >
          <FaShoppingCart className="text-lg" />
          <span>Cart</span>
        </Link>
        
      </nav>
    </header>
  );
}
