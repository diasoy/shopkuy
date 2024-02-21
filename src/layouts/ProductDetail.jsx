// ProductDetail.jsx
import { useParams } from "react-router-dom";
import products from "../utils/data";
import { useState } from "react";
const ProductDetail = () => {
  const { id } = useParams();
  const [isItemAdded, setIsItemAdded] = useState(false);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-5xl font-bold">Product not found</div>
    );
  }

  const handleAddToCart = () => {
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 2000); 
  };

  return (
    <>
      <div className="bg-zinc-800 text-white py-4">
        <button
          className="bg-green-700 px-3 py-1 rounded-md fixed top-0 left-0 mt-4 ml-4 text-zinc-100"
          onClick={() => window.history.back()}
        >
          Kembali
        </button>
        <div className="flex flex-col justify-center items-center mx-4 my-2 gap-2">
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={product.name} className="rounded-md" />
            </div>
          ))}
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-xl mt-10 md:text-2xl lg:text-3xl">
              {product.title}
            </h1>
            <h3 className="">
              Category :{" "}
              <a
                href={`/${product.category.name}`}
                className="bg-zinc-400 px-3 py-1 rounded-md md:text-base lg:text-lg hover:bg-zinc-500 hover:text-zinc-100 transition-all ease-in-out duration-300"
              >
                {product.category.name}
              </a>
            </h3>
            <p className="text-justify md:mx-10 md:text-base lg:text-lg lg:mx-24">
              {product.description}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 mt-10">
            <h3 className="font-bold text-4xl">${product.price}</h3>
            <button
              onClick={handleAddToCart}
              className="bg-green-600 hover:bg-green-700 rounded-md text-md md:text-base xl:text-xl font-medium text-zinc-100 px-32 py-3"
            >
              {isItemAdded ? "Added to Cart ✅" : "Add to Cart"}
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
