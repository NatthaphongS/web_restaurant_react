import { useNavigate } from "react-router-dom";
import useOrder from "../../../hook/use-order";

export default function FooterPayment() {
  const { payment, totalPrice, createOrder } = useOrder();
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/order");
  };
  const handleCreateOrder = () => {
    createOrder();
  };
  return (
    <footer className="bg-primary w-full text-whitetext px-3 pb-3">
      <div className="flex justify-between px-4 py-2 w-full">
        <p>ราคารวม</p>
        <p>{totalPrice} บาท</p>
      </div>
      <div className="flex justify-evenly items-center gap-3 w-full ">
        <button
          onClick={handleCreateOrder}
          className="flex justify-center items-center flex-[7] rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryDark active:bg-secondaryDark active:scale-90 "
        >
          ยืนยันการชำระเงิน
        </button>
        {!payment && (
          <div
            onClick={handleClick}
            className="flex justify-center items-center flex-[3] max-w-[50px] rounded-xl cursor-pointer w-fit p-1 bg-primary text-whitetext hover:bg-primaryLight  active:bg-primaryDark active:scale-90 "
          >
            <img src="/icons/GoBack.png" className="w-10" />
          </div>
        )}
      </div>
    </footer>
  );
}
