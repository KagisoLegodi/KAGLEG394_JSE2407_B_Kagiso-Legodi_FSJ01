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
      </nav>
    </header>
  );
}
