import { products } from "../../src/assets/assets";
import Card from "../Card";

const LatestCollection = () => {
  const newProducts = products.slice(0, 10);

  return (
    <div className="my-10">
      <div className="py-8">
        <div className="flex items-center justify-center  gap-2 mb-3">
          <p className="text-gray-500 text-3xl">
            LATEST
            <span className="text-gray-700 font-medium"> COLLECTIONS</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          assumenda consequatur nihil?{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {newProducts.map((product) => {
          return (
            <Card
              key={product._id}
              refer={product._id}
              desc={product.name}
              img={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestCollection;
