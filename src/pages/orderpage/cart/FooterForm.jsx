import { useNavigate } from "react-router-dom";
import useOrder from "../../../hook/use-order";

export default function FooterForm() {
  const { order, setOrder, totalPrice, error, setError, payment } = useOrder();
  const navigate = useNavigate();
  const handleClick = () => {
    if (order.length > 0) {
      return navigate("/order/payment");
    }
    const newError = { ...error, orderDetail: "Can't be empty" };
    return setError(newError);
  };
  return (
    <footer className="bg-primary w-full text-whitetext px-3 pb-3">
      <div className="flex justify-between px-4 py-2 w-full">
        <p>ราคารวม</p>
        <p>{totalPrice} บาท</p>
      </div>
      <div className="flex justify-evenly items-center gap-3 w-full ">
        <button
          onClick={handleClick}
          className="flex justify-center items-center flex-[8] rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryDark active:bg-secondaryDark active:scale-90 "
        >
          ชำระเงิน
        </button>
        <div
          onClick={() => setOrder([])}
          className="flex justify-center items-center flex-[2] max-w-[60px] rounded-xl cursor-pointer px-2 w-fit py-2 bg-primary text-whitetext hover:bg-primaryLight  active:bg-primaryDark active:scale-90 "
        >
          <img src="/icons/Trash.png" className="w-7" />
        </div>
      </div>
    </footer>
  );
}
