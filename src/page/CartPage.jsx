import { useOutletContext } from "react-router";
import { assets } from "../../src/assets/assets";
import { useEffect } from "react";
import "../../src/App.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const CartPage = () => {
  const { setProductsNum, setProduct, product, total, setTotal } =
    useOutletContext();

  useEffect(() => {
    const retrieveProducts = JSON.parse(localStorage.getItem("product"));
    if (retrieveProducts) {
      setProduct(retrieveProducts);
    }
  }, []);

  useEffect(() => {
    setTotal(0);
    setProductsNum(0);

    const { totalValue, totalQuantity } = product.reduce(
      (acc, item) => {
        acc.totalValue += item.quantity * item.price;
        acc.totalQuantity += item.quantity;
        return acc;
      },
      { totalValue: 0, totalQuantity: 0 }
    );
    setTotal(totalValue);
    setProductsNum(totalQuantity);

    if (product.length > 0) {
      localStorage.setItem("product", JSON.stringify(product));
    }
  }, [product]);

  return (
    <div className="max-w-6xl m-auto">
      <div className="pt-14">
        <div className="mb-3 text-2xl">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-gray-500">
              YOUR
              <span className="text-gray-700 font-medium"> CART</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
        </div>
        {product.map((filteredProduct, index) => (
          <div key={index}>
            <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className=" flex items-start gap-6">
                <img
                  src={filteredProduct.image}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {filteredProduct.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>${filteredProduct.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {filteredProduct.selectedSize}
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 appearance-none"
                value={filteredProduct.quantity}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);

                  if (newValue == 0) {
                    setProduct((prevState) => [
                      ...prevState.filter((particularProduct) => {
                        if (
                          particularProduct._id == filteredProduct._id &&
                          particularProduct.selectedSize !==
                            filteredProduct.selectedSize
                        ) {
                          return true;
                        } else if (
                          particularProduct._id !== filteredProduct._id
                        ) {
                          return true;
                        }
                      }),
                    ]);
                  } else {
                    setProduct((prevState) => [
                      ...prevState.map((particularProduct) => {
                        if (
                          particularProduct._id === filteredProduct._id &&
                          particularProduct.selectedSize ===
                            filteredProduct.selectedSize
                        ) {
                          return { ...particularProduct, quantity: newValue };
                        }
                        return particularProduct;
                      }),
                    ]);
                  }
                }}
              />
              <img
                src={assets.bin_icon}
                alt=""
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                onClick={() => {
                  setProduct((prevState) =>
                    prevState.filter((filtered) => {
                      if (
                        filtered._id == filteredProduct._id &&
                        filtered.selectedSize !== filteredProduct.selectedSize
                      ) {
                        return true;
                      } else if (filtered._id !== filteredProduct._id) {
                        return true;
                      }
                    })
                  );
                }}
              />
            </div>
          </div>
        ))}
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <div className="w-full">
              <div className="text-2xl">
                <div className="inline-flex gap-2 items-center mb-3">
                  <p className="text-gray-500">
                    CART{" "}
                    <span className="text-gray-700 font-medium">TOTALS</span>
                  </p>
                  <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$ {total}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Shipping Fee</p>
                  <p>$ 10.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <b>Total</b>
                  <b>
                    ${" "}
                    {total == 0
                      ? parseFloat(0).toFixed(2)
                      : parseFloat(total + 10).toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
            <div className=" w-full text-end">
              <Link to="/checkoutPage">
                <button className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
