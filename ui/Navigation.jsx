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
        <ul className={style.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
        <Search placeholder="Buscar Producto..." />
      </nav>
    </header>
  );
}
