import { Link } from "react-router-dom";
type NavbarItem = {
  label: string;
  href: string;
};

const NavbarItems: NavbarItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-b-gray-200 h-[7vh] flex justify-between items-center px-48">
      <h1 className="font-semibold text-2xl">Code Nexus</h1>
      <div className="flex gap-x-20 text-lg">
        {NavbarItems.map((n) => (
          <div key={n.href}>
            <Link to={n.href}>{n.label}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
