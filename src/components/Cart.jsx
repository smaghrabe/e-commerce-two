import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
//import cart context
import { CartContext } from "../context/CartContext";

const Cart = ({ item }) => {
  // cart context
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  //destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icone */}
          <div
            onClick={() => removeFromCart(id)}
            className="flex justify-between mb-2"
          >
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-orange-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/*quantity*/}
            <div className="flex flex-1 max-w-[100px]  items-center h-full border font-medium text-primary ">
              {/* minus icons */}
              <div
                onClick={() => decreaseAmount(id)}
                className=" rounded flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount icons */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icons */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex justify-around items-center text-primary font-medium">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium ">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
