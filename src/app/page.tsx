import { Suspense } from "react";

const fetchCall = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default async function Home() {
  let response = await fetchCall();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ol>
        {response.slice(0, 5).map((el: any) => (
          <div className="flex items-center">
            <Suspense fallback={<div>Loading...</div>}>
              <li className="border border-solid border-red-300 m-3 p-6">
                <img
                  width={200}
                  height={200}
                  src={el.image}
                  alt={el.category}
                  className="mr-4 rounded-full"
                />

                <p className="truncate text-sm font-semibold md:text-base">
                  {el.title}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  {el.rating.rate}
                </p>
                <p className={` truncate text-sm font-medium md:text-base`}>
                  ${el.price}
                </p>
              </li>
            </Suspense>
          </div>
        ))}
      </ol>
    </main>
  );
}
