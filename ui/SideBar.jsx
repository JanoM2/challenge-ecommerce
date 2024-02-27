import Link from "next/link";

const fetchCall = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  return res.json();
};

export default async function SideBar() {
  const res = await fetchCall();
  return (
    <div className="flex justify-center flex-col items-left w-10rem  bg-blue-500">
      {res.map((el, idx) => (
        <Link href={`/search/${el}`} key={idx}>
          {el}
        </Link>
      ))}
    </div>
  );
}
