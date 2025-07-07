import { useOutletContext } from "react-router";
import { assets } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../components/footer";

const CheckoutPage = () => {
  const { total } = useOutletContext();

  const stripe = () =>
    toast.warn("Stripe is disabled in demo, use COD", {
      progressClassName: "progress-yellow",
    });
  const razorpay = () =>
    toast.warn("Razorpay is disabled in demo, use COD", {
      progressClassName: "progress-yellow",
    });

  return (
    <div className="max-w-6xl m-auto">
      <form className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <div className="inline-flex gap-2 items-center mb-3">
              <p className="text-gray-500">
                DELIVERY{" "}
                <span className="text-gray-700 font-medium">INFORMATION</span>
              </p>
              <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
          </div>

          <div className="flex gap-3">
            <input
              required
              name="firstName"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lastName"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last name"
            />
          </div>

          <input
            required
            name="email"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email address"
          />
          <input
            required
            name="street"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Street"
          />

          <div className="flex gap-3">
            <input
              required
              name="city"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
            />
            <input
              name="state"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-3">
            <input
              required
              name="zipcode"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="Zipcode"
            />
            <input
              required
              name="country"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            required
            name="phone"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone"
          />
        </div>

        <div className="mt-8">
          <div className="mt-8 min-w-80">
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
                  <p>${total}</p>
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
                    $
                    {total == 0
                      ? parseFloat(0).toFixed(2)
                      : parseFloat(total + 10).toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="inline-flex gap-2 items-center mb-3">
              <p className="text-gray-500">
                PAYMENT{" "}
                <span className="text-gray-700 font-medium">METHOD</span>
              </p>
              <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                onClick={stripe}
              >
                <p className="min-w-3.5 h-3.5 border rounded-full "></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>
              <ToastContainer className="font-semibold" />
              <div
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                onClick={razorpay}
              >
                <p className="min-w-3.5 h-3.5 border rounded-full "></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>
              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className="min-w-3.5 h-3.5 border rounded-full bg-green-400"></p>
                <p className="text-gray-500 text-sm font-medium mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
            <div className="w-full text-end mt-8">
              <button
                type="submit"
                className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
