import { useState } from "react";
import useDropdown from "../../hook/use-dropdown";
import useManage from "../../hook/use-manage";

export default function CancelOrderDropDown() {
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();
  const [message, setMessage] = useState();
  const [isError, setIsError] = useState(false);
  const { targetOrder, cancelOrder } = useManage();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (message) {
        await cancelOrder(message, targetOrder.id);
        setMessage();
        setIsOpen(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative" ref={dropDownEl}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-[1] justify-center items-center rounded-xl cursor-pointer px-3 w-fit py-1 font-semibold  text-whitetext bg-primaryLight hover:bg-primary hover:ring hover:ring-whitetext active:scale-90"
      >
        <img src="/icons/More.png" />
      </button>

      {isOpen && (
        <form
          onSubmit={handleSubmitForm}
          className="absolute w-[300px] bg-mybackground right-0 top-[-240px] translate-y-3 border-4 border-primary rounded-lg shadow-md p-2 z-30 text-primary"
        >
          <textarea
            placeholder="หมายเหตุ(จำเป็น)"
            rows="5"
            className="block w-full outline-none border border-primary resize-none px-1"
            value={message}
            onChange={(e) => {
              setIsError(false);
              setMessage(e.target.value);
            }}
          />
          {isError && <span className="text-red">โปรดระบุหมายเหตุ</span>}

          <button className="bg-primary text-whitetext w-full py-1 rounded-md mt-3">
            ยกเลิกรายการอาหาร
          </button>
        </form>
      )}
    </div>
  );
}
