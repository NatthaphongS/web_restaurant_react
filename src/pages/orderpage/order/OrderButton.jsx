import { useState } from "react";
import useOrder from "../../../hook/use-order";

export default function OrderButton({ id }) {
  const { order, addToCart, removeFromCart } = useOrder();
  const [amount, setAmount] = useState(0);

  return (
    <div className="relative h-[30px]">
      <div
        onClick={() => addToCart(id)}
        className="absolute z-[5] right-0 h-full aspect-square rounded-full bg-secondary flex items-center justify-center"
      >
        <img src="/icons/AddOrder.png" />
      </div>
      <div
        className={`absolute z-[4] right-0 translate-x-[-15px] h-full bg-mybackground text-darktext font-semibold flex justify-center items-center ${
          order[id] ? " w-[60px]" : "w-0"
        } transition-all duration-700 ease-in-out `}
      >
        {order[id] || ""}
        <div
          onClick={() => removeFromCart(id)}
          className={`absolute z-[3] left-[-15px] h-full aspect-square rounded-full bg-primaryLight flex items-center justify-center transition-all duration-700 ease-in-out ${
            order[id] ? "rotate-0" : "rotate-180"
          }`}
        >
          <img src="/icons/RemoveOrder.png" />
        </div>
      </div>
    </div>
  );
}
