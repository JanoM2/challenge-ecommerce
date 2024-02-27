"use client";
import { useDispatch } from "react-redux";
import { addProduct } from "../../src/store/feature/userSlice";

export default function ButtonCart({ product }) {
  const dispatch = useDispatch();
  product.quantity = 1;
  console.log(product);

  const handleClick = () => {
    if (product) {
      dispatch(addProduct(product));
      // como mierda HAGO PARA QUE AGREGUE AL CARRITO PERO NO REPITA
      const productStorage =
        JSON.parse(localStorage.getItem("productState")) || [];
      productStorage.push(product);
      console.log(product);
      localStorage.setItem("productState", JSON.stringify(productStorage));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Agregar al Carrito
    </button>
  );
}

/*
const handleClick = () => {
    let arr = [];
    if (dataState) {
      dispatch(addProduct(dataState));

      const storage = JSON.stringify(dataState);
      arr.push(storage);

      localStorage.setItem("productState", arr);
    }
  };
*/
