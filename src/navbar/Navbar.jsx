import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-0 z-50">
        {/* MOBILE MENU */}
        <div className="flex justify-between px-10 py-5 bg-zinc-900 lg:hidden">
          <div>
            <Link to="/" className="font-semibold text-green-500 text-xl ">
              ShopKuy
            </Link>
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
            <Link to="/">All</Link>
            <Link to="/clothes">Clothes</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/furniture">Furniture</Link>
            <Link to="/shoes">Shoes</Link>
            <Link to="/miscellaneous">Miscellaneous</Link>
            <Link to="/basket">Basket</Link>
          </div>
        </div>

        {/* WEB MENU */}
        <div className="hidden lg:flex justify-between items-center gap-4 w-full bg-zinc-900 px-32 py-8 text-white">
          <div>
            <Link to="/" className="text-2xl font-semibold text-green-500">
              ShopKuy
            </Link>
          </div>
          <div className="flex gap-1 text-base xl:text-xl">
            <Link to="/" className="hover:bg-green-800 px-3 py-1">
              All
            </Link>
            <Link to="/clothes" className="hover:bg-green-800 px-3 py-1">
              Clothes
            </Link>
            <Link to="/electronics" className="hover:bg-green-800 px-3 py-1">
              Electronics
            </Link>
            <Link to="/furniture" className="hover:bg-green-800 px-3 py-1">
              Furniture
            </Link>
            <Link to="/shoes" className="hover:bg-green-800 px-3 py-1">
              Shoes
            </Link>
            <Link to="/miscellaneous" className="hover:bg-green-800 px-3 py-1">
              Miscellaneous
            </Link>
            <Link to="/basket" className="hover:bg-green-800 px-3 py-1">
              Basket
            </Link>
          </div>
        </div>
      </div>

      {/* Search */}
    </>
  );
};

export default Navbar;
