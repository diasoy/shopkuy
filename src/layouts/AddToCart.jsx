import { useState } from "react";

const AddToCart = () => {
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddToCart = () => {
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 2000); 
  };

  return (
    <>
      <div>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 hover:bg-green-700 rounded-md text-sm md:text-base xl:text-xl font-medium text-zinc-100 px-3 py-1"
        >
          {isItemAdded ? "Added to Cart ✅" : "Add to Cart"}
        </button>
      </div>
    </>
  );
};

export default AddToCart;