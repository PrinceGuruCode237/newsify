import { useEffect, useState } from "react";
import Button from "./Button";
import Search from "./Search";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [isOpen]);
  return (
    <nav className="relative px-4 py-4 lg:px-16 md:px-8 flex items-center justify-between">
      <a href="#" className="logo lg:mr-4 w-52">
        <img src="./assets/icons/logo.svg" alt="" />
      </a>
      <div className="flex items-center gap-4 lg:gap-6 md:gap-4">
        <ul className="hidden mx-4 py-4 px-2 md:flex items-center gap-4  ">
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              Accueil
            </a>
          </li>
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              About
            </a>
          </li>
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              Pricing
            </a>
          </li>
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              Démo
            </a>
          </li>
        </ul>
        <div className="search relative hidden md:block">
          <Search placeholder={"Search"} />
        </div>
        <Button title={"Register"} className={"text-white"} />
        <div
          className="w-12 h-12 md:hidden flex items-center justify-center cursor-pointer rounded-full bg-lightgray"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="hamburger ">
            {isOpen ? (
              <svg
                width="18"
                height="16"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 1.95449L1.04551 24M23.0455 23.9544L1 2"
                  stroke="#222628"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28307 15L17 15M16.9996 8L1 8M17 0.999999L9.97186 0.999999"
                  stroke="#222628"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </div>
      </div>

      <div
        className={`"mobile-nav  duration-300 md:hidden absolute bg-white overflow-hidden  w-full  left-0 top-20 h-screen ${
          isOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        }`}
        style={{
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <ul className="flex flex-col justify-center items-center gap-4">
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              About
            </a>
          </li>
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              Pricing
            </a>
          </li>
          <li className=" text-base  p-1">
            <a
              href="#home"
              className="hover:underline transition-all duration-300"
            >
              Démo
            </a>
          </li>
          <div className="w-[40%] mx-auto">
            <Search placeholder={"Search"} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
