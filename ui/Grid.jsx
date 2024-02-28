import Image from "next/image";
import Link from "next/link";
import ButtonCart from "./Button/ButtonCart";

export default async function Grid(res) {
  const { products, query, arr } = res;
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
    <ul>
      {validator ? (
        filter.map((el) => (
          <div>
            <Link
              href={`/products/${el.id}`}
              className="flex flex-col justify-center items-center w-1/2 m-auto border-solid border-2 border-sky-500"
            >
              <h2 className="text-xl font-bold mb-2">{el.title}</h2>
              <p className="text-gray-900 font-bold mt-2">${el.price}</p>
              <p className="text-gray-700 w-full">{el.description}</p>
              <Image
                src={el.image}
                alt={`Producto ${el.id}`}
                className="m-10"
                width={300}
                height={300}
              />
              <p className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
}
