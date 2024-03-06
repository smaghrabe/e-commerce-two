import React, { useContext, useEffect, useState } from "react";
// SidebarContext context
import { SidebarContext } from "../context/SidebarContext";
// CartContext context
import { CartContext } from "../context/CartContext";
//import icons
import { BsBagCheck } from "react-icons/bs";
//import link
import { Link } from "react-router-dom";
//import img
import Logo from "../img/logo.svg";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container justify-between mx-auto flex items-center h-ful">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px] " src={Logo} alt="" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px] "
        >
          <BsBagCheck className="text-2xl " />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] flex text-white rounded-full justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
