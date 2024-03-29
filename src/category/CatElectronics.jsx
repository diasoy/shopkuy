// Products.jsx
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import { products as products2 } from "../utils/data"; // Import products from utils/data.js
import SearchBar from "../navbar/SearchBar";
import AddToCart from "../layouts/AddToCart";

const CatElectronics = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(products2);

  useEffect(() => {
    if (searchValue) {
      setProducts(
        products2.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setProducts(products2);
    }
  }, [searchValue]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <div>
        <div className="bg-zinc-800 text-white">
          <div>
            <h1 className="text-center font-bold py-5 text-xl md:text-2xl lg:text-3xl lg:py-12 xl:text-4xl">
              Electronics
            </h1>
          </div>

          {/* shop */}
          <div className="grid grid-cols-2 mx-2 items-stretch text-white text-md md:grid-cols-3 xl:grid-cols-4 lg:mx-32">
            {products.map(
              (product) =>
                product.category.name === "Electronics" && (
                  <>
                    <div className="flex flex-col justify-between mx-2 my-4 bg-zinc-100 rounded-lg pb-4 hover:scale-105 hover:transition-all hover:ease-in-out cursor-pointer">
                      <Link key={product.id} to={`/product/${product.id}`}>
                        <div key={product.id}>
                          <div style={{ position: "relative" }}>
                            <img
                              src={product.images}
                              alt={product.title}
                              className="w-26 h-26 rounded-lg rounded-b-none"
                            />
                            <p className="absolute bottom-0 left-2 transform-translate-x-1/2 bg-zinc-500 text-zinc-100 px-2 text-sm py-1 mb-2 rounded-md xl:text-lg">
                              {product.category.name}
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-zinc-900 px-2 pt-5 gap-2">
                            <h2 className="text-center font-medium text-sm md:text-base xl:text-lg">
                              {product.title}
                            </h2>
                          </div>
                        </div>
                      </Link>
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold text-zinc-900 text-2xl">
                          ${product.price}
                        </h3>
                        <AddToCart product={product} />
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
          {/* shop end */}
        </div>
      </div>
    </>
  );
};

export default CatElectronics;
