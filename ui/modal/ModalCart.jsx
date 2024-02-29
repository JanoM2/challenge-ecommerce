"use client";

import Cart from "../cart/Cart";
import style from "./ModalCart.module.css";

export default function ModalCart() {
  const handleClick = () => {
    const element = document.getElementById("cartModal");
    element.classList.toggle("hidden");
  };
  return (
    <div>
      <div id="cartModal" className={`hidden ${style.modal}`}>
        <div
          style={{ margin: "10px" }}
          className="flex justify-center items-center"
        >
          <button
            style={{
              border: "1px solid gray",
              backgroundColor: "rgb(207 207 207)",
            }}
            onClick={() => handleClick()}
            className="hover:text-gray-900 rounded-md shadow-md py-3 text-xl font-bold px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:shadow-lg"
          >
            Cerrar carrito
          </button>
        </div>

        <div className="items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              style={{ border: "1px solid gray" }}
              className="font-bold text-xl rounded-md text-lg leading-6 font-medium text-gray-900 w-1/2 m-auto rounded"
            >
              Carrito
            </h3>
            <article>
              <Cart />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
