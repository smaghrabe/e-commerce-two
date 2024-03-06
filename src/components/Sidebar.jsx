import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icone
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import Cart from "../components/Cart";
// import sidebar context
import { SidebarContext } from "../context/SidebarContext";
// import cart context
import { CartContext } from "../context/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}

        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[450px] lg:h-[640px] overflow-y-auto overflow-x-hidden border">
        {cart.map((item) => {
          return <Cart item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col ga-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2 ">Total: </span>${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="flex cursor-pointer py-4 bg-orange-500 text-white w-10 h-10 justify-center items-center rounded text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center mt-2 text-primary w-full rounded font-medium"
        >
          View Cart
        </Link>
        <Link className="bg-primary flex p-4 justify-center items-center mt-2  text-white w-full rounded font-medium">
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
