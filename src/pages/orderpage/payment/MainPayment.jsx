import { useRef } from "react";
import useOrder from "../../../hook/use-order";

export default function MainPayment() {
  const fileEl = useRef(null);
  const { error, payment, setPayment } = useOrder();
  return (
    <div className="h-full p-2 overflow-y-scroll font-semibold">
      <div className="flex flex-col items-center">
        <p className="text-xl">แสกนเพื่อชำระเงิน</p>
        <div className="w-[80%] px-4">
          <img
            src="/OnlyQR.png"
            alt="ธ.กสิกรไทย 024-1-764036"
            className="mx-auto"
          />
        </div>
        <p className="text-sm">ชื่อบัญชี : นายณัฐพงศ์ สินศุภฤกษ์</p>
        <div
          onClick={() => fileEl.current.click()}
          className="flex justify-center items-center rounded-xl cursor-pointer my-2 px-3 py-1 bg-primary text-whitetext hover:ring hover:ring-secondary active:bg-primaryDark active:scale-90"
        >
          {payment ? "แก้ไขสลิป" : "อัพโหลดสลิป"}
        </div>
      </div>
      <div className="mx-auto w-fit">
        {payment ? (
          <div
            onClick={() => fileEl.current.click()}
            className="cursor-pointer flex justify-center items-center rounded-xl overflow-hidden"
          >
            <img
              src={URL.createObjectURL(payment)}
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <input
        type="file"
        className="hidden"
        name="menuImage"
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setPayment(e.target.files[0]);
          }
        }}
      />
      {true && (
        <>
          <p className="mx-auto w-fit text-red">กรุณาอัพโหลดสลิป</p>
          <p className="mx-auto w-fit text-red">ก่อนยืนยันการชำระเงิน</p>
        </>
      )}
    </div>
  );
}
