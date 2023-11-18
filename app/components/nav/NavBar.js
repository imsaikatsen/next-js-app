import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-center p-3">
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/dashboard" className="ml-3">
            Dashbaord
          </Link>
          <Link href="/about" className="ml-3">
            About
          </Link>
          <Link href="/contact" className="ml-3">
            Contact
          </Link>
        </li>
        {/* <li className="ml-3">
          <a href="#">Dashbaord</a>
        </li> */}
      </ul>
      {/* <ul>
        <li>
          <a href="#">About Us</a>
          <a href="#">Conatct Us</a>
        </li>
        <li className="ml-3">
          <a href="#">Conatct Us</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
