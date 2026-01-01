const ProductList = ({ products, addToCart }) => {
  return (
    <div className="p-6 grid lg:grid-cols-3 sm:grid-cols-1 gap-6 bg-[#060010]">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white w-[27rem] mx-auto my-4 hover:shadow-2xl hover:shadow-cyan-500"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[21rem]"
          />

          <h2 className="text-2xl text-center mt-2 text-cyan-500">
            {item.title}
          </h2>

          <p className="p-5 text-lg">{item.description}</p>

          <p className="text-yellow-500 px-5 font-bold text-3xl">
            ${item.price}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => addToCart(item)}
              className="w-[80%] bg-black py-4 my-4 text-white hover:bg-amber-200 hover:text-black hover:rounded-3xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
