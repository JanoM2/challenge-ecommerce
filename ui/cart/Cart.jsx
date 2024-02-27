"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getProduct } from "../../src/store/feature/userSlice";
import { useEffect, useState } from "react";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);

  const selectProduct = useSelector(getProduct);
  const actProduct = selectProduct.payload.product.products;

  const storage = localStorage.getItem("productState") || [];
  const productStorage = JSON.parse(storage);
  let productRender = [];

  if (productStorage.length > 0) {
    productRender.push(productStorage);
  }

  if (actProduct.length > 0) {
    productRender.push(actProduct);
  }

  const removeBtn = (product) => {
    const elementos = document.querySelectorAll(`.quantity-${product.id}`);
    const valores = [];

    elementos.forEach((elemento) => {
      valores.push(elemento.value--);
    });

    for (let i = 0; i < elementos.length; i++) {
      elementos[i].value = valores[i] - 1;
    }
    product.quantity--;

    const index = productStorage.findIndex((p) => p.id === product.id);
    productStorage[index].quantity - 1;

    const total = calcularTotal();
    localStorage.setItem("productState", JSON.stringify(productStorage));
    setTotalPrice(total);
  };

  const addBtn = (product) => {
    const elementos = document.querySelectorAll(`.quantity-${product.id}`);
    const valores = [];

    elementos.forEach((elemento) => {
      valores.push(elemento.value++);
    });

    for (let i = 0; i < elementos.length; i++) {
      elementos[i].value = valores[i] + 1;
    }

    product.quantity++;
    const index = productStorage.findIndex((p) => p.id === product.id);
    productStorage[index].quantity + 1;

    const total = calcularTotal();
    localStorage.setItem("productState", JSON.stringify(productStorage));
    setTotalPrice(total);
  };

  const calcularTotal = () => {
    let total = 0;

    for (let i = 0; i < productStorage.length; i++) {
      if (productStorage[i].quantity === 0) {
        productStorage.splice(i, 1);
      }
    }

    productStorage.forEach((product) => {
      total += product.price * product.quantity;
    });

    return Math.floor(total);
  };

  useEffect(() => {
    const elementos = document.querySelectorAll(".total-modal");
    const total = calcularTotal();

    elementos.forEach((element) => (element.textContent = total));

    setTotalPrice(total);
  }, [productStorage]);

  return (
    <>
      {productRender.length > 0 ? (
        productRender[0].map((product, idx) => (
          <div
            key={idx}
            className={`product-${product.id} flex items-center border-b border-gray-200 py-4`}
          >
            <Image
              src={product.image ? product.image : null}
              alt={product.title}
              width={200}
              height={200}
              className="w-20 h-20 mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-600">Precio: ${product.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => removeBtn(product)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none mr-2"
                >
                  -
                </button>
                <input
                  type="tel"
                  id="quantity"
                  name="quantity"
                  defaultValue={product.quantity}
                  className={`quantity-${product.id} w-16 py-1 px-2 border border-gray-300 rounded text-center focus:outline-none`}
                />
                <button
                  onClick={() => addBtn(product)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none ml-2"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="m-full w-full flex justify-center items-center">
          Your cart is emty
        </h1>
      )}
      {productRender.length > 0 && (
        <p className="text-gray-900 font-bold">
          Precio Total: $<b className="total-modal">{totalPrice}</b>
        </p>
      )}
    </>
  );
}
