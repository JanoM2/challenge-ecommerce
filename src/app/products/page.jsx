import Image from "next/image";
import Link from "next/link";
import ButtonCart from "../../../ui/Button/ButtonCart";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default async function ProductsPage() {
  let response = await fetchProducts();

  return (
    <main>
      <ol className="flex justify-center items-center flex-col">
        {response.map((el, idx) => (
          <li
            key={idx}
            style={{ width: "500px" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden m-2 hover:border-blue-900 hover:border-2"
          >
            <div className="flex flex-col justify-center items-center p-4 m-auto">
              <Link href={`/products/${el.id}`}>
                <h2 className="text-xl font-bold mb-2">{el.title}</h2>
                <p className="text-gray-900 font-bold mt-2">${el.price}</p>
                <p className="text-gray-700 w-full">{el.description}</p>
                <Image
                  src={el.image}
                  alt={`Producto ${el.id}`}
                  className="m-10"
                  width={100}
                  height={100}
                />
                <p className="mt-4  bg-blue-500 text-white font-bold flex justify-center py-2 m-auto w-1/2 rounded focus:outline-none focus:shadow-outline">
                  ${el.price}
                </p>
              </Link>
            </div>
            <ButtonCart product={el} />
          </li>
        ))}
      </ol>
    </main>
  );
}
