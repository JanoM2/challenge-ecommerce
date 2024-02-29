"use client";

import Image from "next/image";
import ButtonPay from "../Button/ButtonPay";
import { useSelector } from "react-redux";
import { getProduct } from "../../src/store/feature/userSlice";
import { useEffect, useState } from "react";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const selectProduct = useSelector(getProduct);
  const actProduct = selectProduct.payload.product.products;
  let productRender = [];
  let productStorage;

  const storage = localStorage.getItem("productState") || [];
  if (storage.length > 0) {
    productStorage = JSON.parse(storage);
  } else {
    productStorage = storage;
  }

  if (productStorage.length > 0) {
    productRender.push(productStorage);
  }

  if (actProduct.length > 0) {
    productRender.push(actProduct);
  }

  const removeBtn = (product) => {
    const elementos = document.querySelectorAll(`.quantity-${product.id}`);

    elementos.forEach((elemento) => {
      let valorActual = parseInt(elemento.value);
      valorActual -= 1;
      elemento.value = valorActual;
    });

    const index = productStorage.findIndex((p) => p.id === product.id);
    if (productStorage[index].quantity > 0) {
      productStorage[index].quantity -= 1;
    }

    if (productStorage[index].quantity === 0) productStorage.splice(index, 1);

    const total = calcularTotal();
    localStorage.setItem("productState", JSON.stringify(productStorage));
    setTotalPrice(total);
  };

  const addBtn = (product) => {
    const elementos = document.querySelectorAll(`.quantity-${product.id}`);

    elementos.forEach((elemento) => {
      let valorActual = parseInt(elemento.value);
      valorActual += 1;
      elemento.value = valorActual;
    });

    const index = productStorage.findIndex((p) => p.id === product.id);
    productStorage[index].quantity += 1;

    const total = calcularTotal();
    localStorage.setItem("productState", JSON.stringify(productStorage));
    setTotalPrice(total);
  };

  const calcularTotal = () => {
    let total = 0;

    productStorage.forEach((product) => {
      total += product.price * product.quantity;
    });

    return Math.ceil(total);
  };

  useEffect(() => {
    const elementos = document.querySelectorAll(".total-modal");
    const total = calcularTotal();

    elementos.forEach((element) => (element.textContent = total));

    setTotalPrice(total);
  }, [productStorage]);

  return (
    <ul className="flex flex-col items-center p-3">
      {productRender.length > 0 ? (
        productRender[0].map((product, idx) => (
          <li
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "10px",
              margin: "5px",
            }}
            key={idx}
            className={`product-${product.id} rounded-md flex items-center border-b border-gray-200 py-4 w-full`}
          >
            <div className="flex items-center w-full">
              <div className="mr-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="font-bold">Precio: ${product.price}</p>
                <div
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    paddingLeft: "10px",
                    border: "1px solid gray",
                    width: "100px",
                  }}
                  className="flex justify-center border border-gray-300 rounded-md"
                >
                  <button
                    onClick={() => removeBtn(product)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none px-3 py-1 border-2 border-gray-300 rounded-l-md transition-colors duration-200"
                  >
                    -
                  </button>
                  <input
                    type="tel"
                    id="quantity"
                    name="quantity"
                    defaultValue={product.quantity}
                    style={{ width: "50px" }}
                    className={`quantity-${product.id} px-2 py-1 text-center focus:outline-none`}
                  />
                  <button
                    onClick={() => addBtn(product)}
                    className="text-gray-500 focus:outline-none px-3 py-1 border-l border-gray-300 rounded-r-md transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h1 className="bg-white m-full w-full flex justify-center items-center">
          Your cart is empty
        </h1>
      )}
      {productRender.length > 0 && (
        <div>
          <p className="text-gray-900 font-bold text-xl my-10 mx-4 uppercase tracking-wide leading-tight">
            Precio Total: $<b className="total-modal">{totalPrice}</b>
          </p>
          <ButtonPay />
        </div>
      )}
    </ul>
  );
}
