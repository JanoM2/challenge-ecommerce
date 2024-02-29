import "tailwindcss/tailwind.css";
import Link from "next/link";
import { HomeSkeleton } from "../../ui/skeletons";
import ButtonOpenCart from "../../ui/Button/ButtonOpenCart";

export default function HomePage() {
  const loading = false;

  return (
    <main>
      <ButtonOpenCart />
      {loading ? (
        <HomeSkeleton />
      ) : (
        <section className="flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mt-10 mb-20 text-white font-bold tracking-wide ">
              Te doy la Bienvenida a mi Tienda Ecommerce
            </h1>
          </div>

          <Link
            href="/products"
            className="animate-bounce bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Ver Productos
          </Link>
        </section>
      )}
    </main>
  );
}
