import Image from "next/image";
import ButtonCart from "../../../../ui/Button/ButtonCart";

export const fetchId = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export default async function DetailPage({ params }) {
  const { id } = params;
  let el = await fetchId(id);

  return (
    <div className="container mx-auto py-8">
      <div className=" m-auto w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          width={300}
          height={300}
          src={el.image}
          alt={el.title}
          className="m-auto w-1/2 h-auto"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{el.title}</h2>
          <p className="text-gray-700 text-sm mb-2">{el.description}</p>
          <p className="text-gray-900 font-bold">${el.price}</p>
          <div className="m-auto flex justify-center items-center flex-col w-1/2">
            <ButtonCart product={el} />
          </div>
        </div>
      </div>
    </div>
  );
}
