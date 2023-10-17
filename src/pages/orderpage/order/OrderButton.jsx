import { useState } from "react";
import useOrder from "../../../hook/use-order";

export default function OrderButton({ menuDetail }) {
  const { order, addToCart, removeFromCart } = useOrder();
  const [amount, setAmount] = useState(0);

  const checkMenuindex = order.findIndex((el) => el.id === menuDetail.id);

  // order = [{id menuname price ....},{},{},{}]
  return (
    <div className="relative h-[30px]">
      <div
        onClick={() => {
          addToCart(menuDetail);
        }}
        className="absolute z-[5] right-0 h-full aspect-square rounded-full bg-secondary flex items-center justify-center cursor-pointer"
      >
        <img src="/icons/AddOrder.png" />
      </div>
      <div
        className={`absolute z-[4] right-0 translate-x-[-15px] h-full bg-mybackground text-darktext font-semibold flex justify-center items-center ${
          order[checkMenuindex]?.amount > 0 ? " w-[60px]" : "w-0"
        } transition-all duration-700 ease-in-out `}
      >
        {order[checkMenuindex]?.amount || ""}
        <div
          onClick={() => {
            removeFromCart(menuDetail);
          }}
          className={`absolute z-[3] left-[-15px] h-full aspect-square rounded-full bg-primaryLight cursor-pointer flex items-center justify-center transition-all duration-700 ease-in-out  ${
            order[checkMenuindex]?.amount > 0 ? "rotate-0" : "rotate-180"
          }`}
        >
          <img src="/icons/RemoveOrder.png" />
        </div>
      </div>
    </div>
  );
}
