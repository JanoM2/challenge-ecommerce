"use client";

import style from "./ModalCart.module.css";
import Cart from "../cart/Cart";

export default function ModalCart() {
  const handleClick = () => {
    const element = document.getElementById("cartModal");
    element.classList.toggle("hidden");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        🛒
      </button>
      <div id="cartModal" className={`hidden ${style.modal}`}>
        <div className="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="bg-gray-50 px-4 py-3 m-10 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleClick}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cerrar
            </button>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden m-10 duration-60 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Carrito
                  </h3>
                  <article>
                    <Cart />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
