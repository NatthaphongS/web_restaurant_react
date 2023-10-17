import useOrder from "../../../hook/use-order";

export default function FooterForm() {
  const { order, setOrder } = useOrder();
  const totalPrice = order.reduce((acc, list) => {
    acc = acc + list.price * list.amount;
    return acc;
  }, 0);
  return (
    <footer className="bg-primary w-full text-whitetext px-3 pb-3">
      <div className="flex justify-between px-4 py-2">
        <p>ราคารวม</p>
        <p>{totalPrice} บาท</p>
      </div>
      <div className="flex justify-center">
        <button className=" mx-auto flex justify-center items-center rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryDark active:bg-secondaryDark active:scale-90 ">
          ยืนยันคำสั่งชื้อ
        </button>
        <div
          onClick={() => setOrder([])}
          className=" mx-auto flex justify-center items-center rounded-xl cursor-pointer px-2 w-fit py-2 bg-primary text-whitetext hover:bg-primaryLight  active:bg-primaryDark active:scale-90 "
        >
          <img src="/icons/Trash.png" className="w-7" />
        </div>
      </div>
    </footer>
  );
}
