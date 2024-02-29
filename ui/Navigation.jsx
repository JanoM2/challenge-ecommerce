import Link from "next/link";
import Search from "./search/SearchBar";
import style from "./Navigation.module.css";

const links = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/products" },
  { label: "Cart", route: "/cart" },
];

export function Navigation() {
  return (
    <header className={style.header}>
      <nav>
        <ul className="flex bg-white justify-start gap-3">
          {links.map(({ label, route }) => (
            <li
              key={route}
              className="font-bold text-xl rounded-md text-white mb-2 p-3 bg-blue-500 hover:bg-blue-700 p-2 focus:outline-none focus:shadow-outline"
            >
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
        <Search placeholder="Buscar Producto..." />
      </nav>
    </header>
  );
}
