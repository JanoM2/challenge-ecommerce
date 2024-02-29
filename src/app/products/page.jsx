"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonOpenCart from "../../../ui/Button/ButtonOpenCart";
import ButtonCart from "../../../ui/Button/ButtonCart";
import { ProductsSkeleton } from "../../../ui/skeletons";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  document.addEventListener("click", () => {
    const element = document.getElementById("cartModal");
    element.classList.toggle("hidden");
  });

  return (
    <main>
      <ButtonOpenCart />
      <ol className="flex flex-wrap gap-3">
        {loading && <ProductsSkeleton />}
        {!loading &&
          products.map((el, idx) => (
            <li
              key={idx}
              style={{ width: "400px" }}
              className="flex flex-col justify-between bg-white rounded-lg hover:shadow-lg m-3 p-3"
            >
              <div className="flex flex-col items-center p-4">
                <Link
                  href={`/products/${el.id}`}
                  className="flex flex-col justify-center"
                >
                  <Image
                    src={el.image}
                    alt={`Producto ${el.id}`}
                    className="m-auto rounded-md w-40 p-3"
                    width={100}
                    height={100}
                  />
                  <p className="font-bold text-2xl border-t-2 border-slate-200 pt-3">
                    ${el.price}
                  </p>
                  <h2 className="text-xl font-bold mb-2">{el.title}</h2>
                  <p className="text-gray-700 w-full">{el.description}</p>
                </Link>
              </div>
              <ButtonCart product={el} />
            </li>
          ))}
      </ol>
    </main>
  );
}
