import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonCart from "./Button/ButtonCart";
import { GridSkeleton } from "./skeletons";

export const Grid = ({ products, query, arr }) => {
  let regex;

  let filter = products.filter((el, idx) => {
    const categories = arr.includes(query);
    let word = query;
    if (query.includes("query")) word = query.slice(8);

    regex = word
      .replace(/%2B/g, " ")
      .replace(/[^\w\s]/gi, "")
      .trim();

    if (products[idx].title.toLowerCase().includes(regex)) return products[idx];
    if (categories) return products[idx];
  });

  const validator = filter.length > 0;

  return (
    <ul className="flex flex-wrap gap-3">
      {!products ? (
        <GridSkeleton />
      ) : validator ? (
        filter.map((el) => (
          <div
            style={{ width: "300px", margin: "10px" }}
            className="flex flex-col justify-center bg-white rounded-lg hover:shadow-lg p-2"
          >
            <Link
              href={`/products/${el.id}`}
              style={{ width: "200px" }}
              className="flex flex-col justify-center items-center m-auto border-solid border-2 border-sky-500"
            >
              <Image
                src={el.image}
                alt={`Producto ${el.id}`}
                className="rounded-md h-38 w-30 p-3"
                width={300}
                height={300}
              />
              <h2 className="text-xl font-bold mb-2">{el.title}</h2>
              <p className="text-gray-700 text-nowrap">{el.description}</p>
              <p className="font-bold text-2xl border-t-2 border-slate-200 pt-3">
                ${el.price}
              </p>
            </Link>
            <ButtonCart product={el} />
          </div>
        ))
      ) : (
        <p>
          There are no products that match <b>"{regex}"</b>
        </p>
      )}
    </ul>
  );
};

export default Grid;
