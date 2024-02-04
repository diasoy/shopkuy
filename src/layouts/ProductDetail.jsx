// ProductDetail.jsx
import { useParams } from "react-router-dom";
import products from "../utils/data";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-5xl font-bold">Product not found</div>
    );
  }

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
            <h1 className="font-bold text-xl mt-10">{product.title}</h1>
            <h3 className="">
              Category :{" "}
              <span className="bg-zinc-400 px-3 py-1 rounded-md">
                {product.category.name}
              </span>
            </h3>
            <p className="text-justify">{product.description}</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 mt-10">
            <h3 className="font-bold text-4xl">${product.price}</h3>
            <button className="bg-green-600 hover:bg-green-700 rounded-md text-md md:text-base xl:text-xl font-medium text-zinc-100 px-32 py-3">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
