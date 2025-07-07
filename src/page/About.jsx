import React from "react";
import { assets } from "../assets/assets";
import Choose from "../../components/AboutPageComponent/Choose";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/footer";

const About = () => {
  return (
    <div className="max-w-6xl m-auto">
      <div className="flex items-center justify-center gap-2 mb-3 text-2xl pt-8 ">
        <p className="text-gray-500">
          ABOUT
          <span className="text-gray-700 font-medium"> US</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      <div className="flex md:flex-row flex-col gap-16 my-10">
        <div>
          <img
            src={assets.about_img}
            alt=""
            className="md:max-w-[450px] h-full"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-3 text-xl pt-8 ">
          <p className="text-gray-500">
            WHY
            <span className="text-gray-700 font-medium"> CHOOSE</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <Choose
            heading="Quality Assurance:"
            text="We meticulously select and vet each product to ensure it meets our
              stringent quality standards."
          />
          <Choose
            heading="Convenience:"
            text=" With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
              stringent quality standards."
          />
          <Choose
            heading="Exceptional Customer Service:"
            text="Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority."
          />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
