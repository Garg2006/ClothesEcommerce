import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const App = () => {
  const [productNum, setProductsNum] = useState(0);
  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  useEffect(() => {
    const retrieveProducts = JSON.parse(localStorage.getItem("product"));
    if (retrieveProducts) setProduct(retrieveProducts);
  }, []);

  useEffect(() => {
    setTotal(0);
    setProductsNum(0);
    product.map((particularProduct) => {
      const totalValue = particularProduct.quantity * particularProduct.price;
      const totalQuantity = particularProduct.quantity;
      setTotal((prevState) => prevState + totalValue);
      setProductsNum((prevState) => prevState + totalQuantity);
    });
  }, [product]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative overflow-hidden">
      <Header productNum={productNum} setSearch={setSearch} />
      <div>
        <Outlet
          context={{
            setSearch,
            search,
            setProductsNum,
            setProduct,
            product,
            selectedSize,
            setSelectedSize,
            productNum,
            total,
            setTotal
            // setProductQuantity,
            // productQuantity,
            // subTotal,
            // setSubTotal,
          }}
        />
      </div>
    </div>
  );
};

export default App;
