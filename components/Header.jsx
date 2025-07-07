import { Link } from "react-router";
import { assets } from "../src/assets/assets";
import { useEffect, useState } from "react";
import menu from "../src/assets/menu_icon.png";
import back from "../src/assets/dropdown_icon.png";

const Header = ({ productNum, setSearch }) => {
  const [activeLink, setActiveLink] = useState("/");
  const [sideMenu, setSideMenu] = useState(false);

  const links = [
    { path: "/", label: "HOME" },
    { path: "/collection", label: "COLLECTION" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    if (sideMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideMenu]);

  return (
    <div>
      <div className="flex items-center h-[70px] justify-between">
        <Link to="/" onClick={() => setActiveLink("/")}>
          <img src={assets.logo} alt="" className="w-36" />
        </Link>

        <div className="items-baseline gap-5 font-semibold min-[880px]:flex hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setActiveLink(link.path)}
              className="flex flex-col items-center justify-center gap-2"
            >
              <p className="text-sm">{link.label}</p>
              <p
                className={`w-2/4 border-b-2 ${
                  activeLink === link.path ? "border-black" : "border-transparent"
                }`}
              />
            </Link>
          ))}
          <a href="/admin" target="_blank">
            <p className="rounded-full px-5 py-2 border text-xs mt-1 text-[12px] ">
              Admin Panel
            </p>
          </a>
        </div>

        <div
          className={`bg-white absolute inset-0 z-10 h-screen ${
            sideMenu ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 ease-in-out`}
        >
          <div
            className="flex p-3 gap-4 items-center cursor-pointer"
            onClick={() => setSideMenu(false)}
          >
            <div className="w-3">
              <img src={back} alt="" className="rotate-180 w-full" />
            </div>
            <p className="font-semibold">Back</p>
          </div>
          <div>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setSideMenu(false);
                }}
              >
                <p
                  className={`py-2 pl-6 border border-[rgb(229,231,235)] font-semibold text-lg ${
                    activeLink == link.path
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {link.label}
                </p>
              </Link>
            ))}
            <a href="/admin" target="_blank">
            <p className="py-2 pl-6 border border-[rgb(229,231,235)] font-semibold text-lg">
              Admin Panel
            </p>
          </a>
          </div>
        </div>

        <div className="flex gap-6 items-center mr-2">
          <Link
            onClick={() => {
              setActiveLink("/collection");
              setSearch(true);
            }}
            to="/collection"
          >
            <img src={assets.search_icon} alt="" className="w-5" />
          </Link>
          <Link to="/LoginPage" onClick={() => setActiveLink()}>
            <img src={assets.profile_icon} alt="" className="w-5" />
          </Link>
          <Link className="relative" to="/cart" onClick={() => setActiveLink()}>
            <img src={assets.cart_icon} alt="" className="w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {productNum}
            </p>
          </Link>
          <div
            className="w-5 max-[880px]:block hidden cursor-pointer"
            onClick={() => setSideMenu(true)}
          >
            <img src={menu} alt="w-full" />
          </div>
        </div>
      </div>
      <hr className="border-[rgb(229,231,235)]" />
    </div>
  );
};

export default Header;
