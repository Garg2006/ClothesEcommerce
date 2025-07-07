import React, { useEffect } from "react";
import { useParams } from "react-router";
import { products } from "../assets/assets";
import { assets } from "../assets/assets";
import Card from "../../components/Card";
import Footer from "../../components/footer";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProductDetail = () => {
  const { setProductsNum, setProduct, setSelectedSize, selectedSize, product } =
    useOutletContext();

  const params = useParams();

  const notify = () =>
    toast.error("Select Product Size", {
      progressClassName: "progress-red",
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return products
    .filter((item) => item._id == params.product)
    .map((item) => {
      return (
        <div key={item._id} className="max-w-6xl m-auto">
          <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
              <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  />
                </div>
                <div className="w-full sm:w-[80%]">
                  <img src={item.image} alt="" className="w-full h-auto" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-medium text-2xl mt-2">{item.name}</h1>
                <div className=" flex items-center gap-1 mt-2">
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                  <p className="pl-2">(122)</p>
                </div>
                <p className="mt-5 text-3xl font-medium">${item.price}</p>
                <p className="mt-5 text-gray-500 md:w-4/5">
                  {item.description}
                </p>
                <div className="flex flex-col gap-4 my-8">
                  <p>Select Size</p>
                  <div className="flex gap-2">
                    {item.sizes.map((size, index) => (
                      <button
                        key={index}
                        className={`border py-2 px-4 bg-gray-100 cursor-pointer ${
                          selectedSize == size
                            ? "border-orange-500"
                            : "transparent"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer font-semibold"
                  onClick={() => {
                    if (selectedSize) {
                      setProductsNum((prevValue) => prevValue + 1);
                      if (product.length) {
                        for (let i = 0; i < product.length; i++) {
                          if (
                            product[i]._id === item._id &&
                            product[i].selectedSize === selectedSize
                          ) {
                            setProduct((prevState) => [
                              ...prevState.map((particularItem) => {
                                if (
                                  particularItem._id === item._id &&
                                  particularItem.selectedSize === selectedSize
                                ) {
                                  return {
                                    ...particularItem,
                                    quantity: particularItem.quantity + 1,
                                  };
                                }
                                return particularItem;
                              }),
                            ]);
                            return;
                          }
                        }
                        setProduct((prevState) => [
                          ...prevState,
                          {
                            ...item,
                            selectedSize,
                            quantity: 1,
                          },
                        ]);
                      } else {
                        setProduct((prevState) => [
                          ...prevState,
                          {
                            ...item,
                            selectedSize,
                            quantity: 1,
                          },
                        ]);
                      }
                    } else {
                      notify();
                    }
                  }}
                >
                  ADD TO CART
                </button>
                <ToastContainer className="font-semibold" />
                <hr className="mt-8 sm:w-4/5" />
                <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                  <p>100% Original product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="flex">
                <b className="border px-5 py-3 text-sm">Description</b>
                <p className="border px-5 py-3 text-sm">Reviews (122)</p>
              </div>
              <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                <p>
                  An e-commerce website is an online platform that facilitates
                  the buying and selling of products or services over the
                  internet. It serves as a virtual marketplace where businesses
                  and individuals can showcase their products, interact with
                  customers, and conduct transactions without the need for a
                  physical presence. E-commerce websites have gained immense
                  popularity due to their convenience, accessibility, and the
                  global reach they offer.
                </p>
                <p>
                  E-commerce websites typically display products or services
                  along with detailed descriptions, images, prices, and any
                  available variations (e.g., sizes, colors). Each product
                  usually has its own dedicated page with relevant information.
                </p>
              </div>
            </div>
            <div className="my-24">
              <div className="flex items-center justify-center  gap-2 mb-3 text-3xl py-2">
                <p className="text-gray-500">
                  RELATED
                  <span className="text-gray-700 font-medium"> PRODUCTS</span>
                </p>
                <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {products
                  .filter(
                    (particularProduct) =>
                      particularProduct.subCategory == item.subCategory &&
                      particularProduct.category == item.category
                  )
                  .map((particularProduct) => (
                    <Card
                      key={particularProduct._id}
                      refer={particularProduct._id}
                      desc={particularProduct.description}
                      img={particularProduct.image}
                      price={particularProduct.price}
                      onImageClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    />
                  ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      );
    });
};

export default ProductDetail;
