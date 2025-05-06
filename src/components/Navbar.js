import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link
            className="text-white hover:text-yellow-300 transition-colors"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-yellow-300 transition-colors"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-yellow-300 transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
