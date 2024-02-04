import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-0 z-50">
        {/* MOBILE MENU */}
        <div className="flex justify-between px-10 py-5 bg-zinc-900 lg:hidden">
          <div>
            <a href="/" className="font-semibold text-green-500 text-xl ">
              ShopKuy
            </a>
          </div>
          <div>
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-white hover:text-zinc-950 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div
            className={
              isOpen
                ? "absolute flex flex-col justify-center items-center gap-4 w-full bg-zinc-900 px-10 py-5 text-white lg:hidden"
                : "hidden"
            }
            style={{ zIndex: 9999 }}
          >
            <a href="/">All</a>
            <a href="/clothes">Clothes</a>
            <a href="/electronics">Electronics</a>
            <a href="/furniture">Furniture</a>
            <a href="/shoes">Shoes</a>
            <a href="/miscellaneous">Miscellaneous</a>
            <a href="/basket">Basket</a>
          </div>
        </div>

        {/* WEB MENU */}
        <div className="hidden lg:flex justify-between items-center gap-4 w-full bg-zinc-900 px-32 py-8 text-white">
          <div>
            <a href="/" className="text-2xl font-semibold text-green-500">
              ShopKuy
            </a>
          </div>
          <div className="flex gap-1 text-base xl:text-xl">
            <a href="/" className="hover:bg-green-800 px-3 py-1">
              All
            </a>
            <a href="/clothes" className="hover:bg-green-800 px-3 py-1">
              Clothes
            </a>
            <a href="/electronics" className="hover:bg-green-800 px-3 py-1">
              Electronics
            </a>
            <a href="/furniture" className="hover:bg-green-800 px-3 py-1">
              Furniture
            </a>
            <a href="/shoes" className="hover:bg-green-800 px-3 py-1">
              Shoes
            </a>
            <a href="/miscellaneous" className="hover:bg-green-800 px-3 py-1">
              Miscellaneous
            </a>
            <a href="/basket" className="hover:bg-green-800 px-3 py-1">
              Basket
            </a>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="pt-20">
        <input
          type="text"
          name="search"
          placeholder="Cari barang"
          className="flex mx-auto h-10 bg-zinc-100 text-zinc-800 px-4 py-2 mt-10 rounded-md text-sm md:text-base lg:text-lg lg:py-5 lg:px-7 xl:text-xl"
        />
      </div>
    </>
  );
};

export default Navbar;
