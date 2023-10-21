import ContractDropDown from "../../../components/dropdown/ContactDropDown";
import useAuth from "../../../hook/use-auth";
import useOrder from "../../../hook/use-order";

export default function TrackOrder() {
  const { ordering } = useOrder();
  const { authUser } = useAuth();
  // console.log(ordering);
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="bg-primary text-whitetext flex items-center justify-center py-2">
        <h5 className="font-semibold">สถานะคำสั่งชื้อ</h5>
      </div>
      <div className="overflow-y-scroll h-full">
        <div className="flex items-center justify-center h-[80px]">
          <h6 className="font-semibold">
            {ordering?.status === "WAITINGPREVIEW"
              ? "กำลังตรวจสอบ..."
              : ordering?.status === "COOKING"
              ? "กำลังทำอาหาร..."
              : ordering?.status === "WAITINGDELIVERY"
              ? "กำลังจัดส่ง..."
              : ordering?.status === "COMPLETE"
              ? "สำเร็จ"
              : "ยกเลิก"}
          </h6>
        </div>
        <div className="flex flex-col items-start text-ellipsis px-2">
          <p className="text-ellipsis line-clamp-1 font-semibold">
            หมายเลขคำสั่งชื้อ :
          </p>
          <p className="text-ellipsis line-clamp-1">{ordering?.id}</p>
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">ชื่อ-สกุล</span>:{" "}
            {authUser?.firstName} {authUser?.lastName}
          </p>
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">เบอร์โทร</span> : {authUser?.mobile}
          </p>
          <p className="text-ellipsis line-clamp-1 font-semibold">
            ที่อยู่จัดส่ง :
          </p>
          <p className="text-ellipsis line-clamp-1">
            {ordering?.deliveryAddress}
          </p>
          <p className="font-semibold">รายการ :</p>
          <div className="w-full px-2">
            {ordering?.orderDetails.map((el) => (
              <div key={el?.id} className=" flex justify-between">
                <p className="truncate max-w-[150px] xl:max-w-[200px]">
                  {el?.amount} x {el?.menu?.menuName}
                </p>
                <p className="truncate">{el?.price} บาท</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-primary w-full text-whitetext px-3 pb-3">
        <div className="flex justify-between px-4 py-2 w-full">
          <p>ราคารวม</p>
          <p>{ordering?.summaryPrice} บาท</p>
        </div>
        <div className="flex justify-evenly items-center  w-full ">
          {ordering?.status === "WAITINGDELIVERY" && (
            <button className="flex justify-center items-center rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryDark active:bg-secondaryDark active:scale-90 ">
              ยืนยันการจัดส่ง
            </button>
          )}
          <ContractDropDown />
        </div>
      </footer>
    </div>
  );
}
