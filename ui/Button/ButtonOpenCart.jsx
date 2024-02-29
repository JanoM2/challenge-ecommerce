"use client";

export default function ButtonOpenCart() {
  const handleClick = () => {
    const element = document.getElementById("cartModal");
    element.classList.toggle("hidden");
  };

  return (
    <button
      onClick={() => handleClick()}
      id="button-open-cart"
      className="fixed top-15 right-0 mt-4 mr-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
    >
      🛒 Abrir Carrito
    </button>
  );
}
