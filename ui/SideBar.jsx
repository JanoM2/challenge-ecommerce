import Link from "next/link";

const fetchCall = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  return res.json();
};

export default async function SideBar() {
  const res = await fetchCall();

  return (
    <div className="flex bg-white justify-center gap-3">
      {res.map((el, idx) => (
        <Link
          href={`/search/${el}`}
          key={idx}
          style={{ padding: "5px" }}
          className="font-bold rounded-md text-lg mb-2 bg-blue-500 hover:bg-blue-700 p-2 focus:outline-none focus:shadow-outline"
        >
          <b>{el}</b>
        </Link>
      ))}
    </div>
  );
}
