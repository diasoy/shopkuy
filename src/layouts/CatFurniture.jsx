import Navbar from "../navbar/Navbar"
import products from "../utils/data";

const CatFurniture = () => {
    return (
        <>
            <Navbar />
      
        <div>
          <div className="bg-zinc-800 text-white">
            <div>
              <h1 className="text-center font-bold py-5 text-xl md:text-2xl lg:text-3xl lg:py-12 xl:text-4xl">
                All Products
              </h1>
            </div>

            {/* shop */}
            <div className="grid grid-cols-2 mx-2 text-white text-md md:grid-cols-3 xl:grid-cols-4 lg:mx-32">
                          {products.map((product) => {
                  if(product.category.name === "Furniture")
                return (
                  <div key={product.id}>
                    <div className="flex flex-col mx-2 my-4 bg-zinc-100 rounded-lg pb-4">
                      <div style={{ position: "relative" }}>
                        <img
                          src={product.images}
                          alt={product.title}
                          className="w-26 h-26 rounded-lg rounded-b-none"
                        />
                        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-zinc-500 text-zinc-100 px-2 text-sm py-1 mb-2 rounded-md xl:text-xl">
                          {product.category.name}
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-zinc-900 px-2 pt-5 gap-2">
                        <h2 className="text-center font-medium text-sm md:text-base xl:text-xl">
                          {product.title}
                        </h2>
                        <h3 className="font-bold text-2xl">${product.price}</h3>
                        <button className="bg-green-600 hover:bg-green-700 rounded-md text-sm md:text-base xl:text-xl font-medium text-zinc-100 px-3 py-1">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* shop end */}
          </div>
        </div>
      
        </>
    )
  }
  
  export default CatFurniture