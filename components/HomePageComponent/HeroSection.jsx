import { assets } from "../../src/assets/assets";
import '../../src/App.css'

const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-400">
      <div className="w-full sm:w-1/2  flex flex-col items-center py-10 sm:py-0">
        <div>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="latest text-3xl lg:text-5xl sm:py-3 leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base ">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={assets.hero_img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
