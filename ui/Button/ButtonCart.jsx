"use client";
import { useDispatch } from "react-redux";
import { addProduct } from "../../src/store/feature/userSlice";

export default function ButtonCart({ product }) {
  const dispatch = useDispatch();
  product.quantity = 1;

  const handleClick = () => {
    const productStorage =
      JSON.parse(localStorage.getItem("productState")) || [];

    const index = productStorage.findIndex((el) => el.id === product.id);

    if (index !== -1) {
      productStorage[index].quantity += 1;
    } else {
      product.quantity = 1;
      productStorage.push(product);
    }

    localStorage.setItem("productState", JSON.stringify(productStorage));
    dispatch(addProduct(product));

    const elementos = document.querySelectorAll(`.quantity-${product.id}`);
    const valores = [];

    elementos.forEach((elemento) => {
      valores.push(elemento.value++);
    });

    for (let i = 0; i < elementos.length; i++) {
      elementos[i].value = valores[i] + 1;
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
