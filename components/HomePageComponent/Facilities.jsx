import { assets } from "../../src/assets/assets";

const Facilities = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <h3 className="font-semibold">Easy Exchange Policy</h3>
        <p className=" text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <h3 className=" font-semibold">7 Days Return Policy</h3>
        <p className=" text-gray-400">We oprovide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
        <h3 className=" font-semibold">Best customer support</h3>
        <p className=" text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Facilities;
