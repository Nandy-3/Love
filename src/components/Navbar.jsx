import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-10 p-6 bg-white shadow-md">
      <Link to="/" className="font-semibold hover:text-pink-500 transition">
        Home
      </Link>

      <Link to="/memories" className="font-semibold hover:text-pink-500 transition">
        Memories
      </Link>

      <Link to="/reasons" className="font-semibold hover:text-pink-500 transition">
        Reasons
      </Link>

      <Link to="/forever" className="font-semibold hover:text-pink-500 transition">
        Forever
      </Link>
    </nav>
  );
};

export default Navbar;
