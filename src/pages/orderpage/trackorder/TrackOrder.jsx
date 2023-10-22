import { useParams } from "react-router-dom";
import ContractDropDown from "../../../components/dropdown/ContactDropDown";
import useAuth from "../../../hook/use-auth";
import useOrder from "../../../hook/use-order";
import { useEffect } from "react";
import axios from "../../../config/axios";
import WaveTextAnimation from "./WaveTextAnimation";

export default function TrackOrder() {
  const { trackOrder, setTrackOrder, handleConfirmDelivery } = useOrder();
  const { orderId } = useParams();
  // console.log(trackOrder?.orderDetails);

  useEffect(() => {
    const getTrackOrder = () => {
      axios
        .get(`/order/getTrackingOrder/${orderId}`)
        .then((res) => {
          if (res?.data) {
            setTrackOrder(res.data);
          }
        })
        .catch((err) => console.log(err));
    };
    getTrackOrder();
    const intervalId = setInterval(getTrackOrder, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="bg-primary text-whitetext flex items-center justify-center py-2">
        <h5 className="font-semibold">สถานะคำสั่งชื้อ</h5>
      </div>
      <div className="overflow-y-scroll h-full">
        <div className="flex items-center justify-center h-[80px]">
          {trackOrder?.status === "WAITINGPREVIEW" ? (
            <WaveTextAnimation mytext="กำลังตรวจสอบ..." />
          ) : trackOrder?.status === "COOKING" ? (
            <WaveTextAnimation mytext="กำลังทำอาหาร..." />
          ) : trackOrder?.status === "WAITINGDELIVERY" ? (
            <WaveTextAnimation mytext="กำลังจัดส่ง..." />
          ) : trackOrder?.status === "COMPLETE" ? (
            <h6 className="font-semibold text-2xl">สำเร็จ</h6>
          ) : (
            <h6 className="font-semibold text-2xl">ยกเลิก</h6>
          )}
        </div>
        <div className="flex flex-col items-start text-ellipsis px-2">
          {trackOrder?.comment && (
            <>
              <p className="text-ellipsis line-clamp-1 font-semibold">
                หมายเลขคำสั่งชื้อ :
              </p>
              <p className="text-ellipsis line-clamp-1">{trackOrder?.id}</p>
            </>
          )}
          <p className="text-ellipsis line-clamp-1 font-semibold">
            หมายเลขคำสั่งชื้อ :
          </p>
          <p className="text-ellipsis line-clamp-1">{trackOrder?.id}</p>
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">ชื่อ-สกุล</span>:{" "}
            {trackOrder?.user.firstName} {trackOrder?.user.lastName}
          </p>
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">เบอร์โทร</span> :{" "}
            {trackOrder?.user.mobile}
          </p>
          <p className="text-ellipsis line-clamp-1 font-semibold">
            ที่อยู่จัดส่ง :
          </p>
          <p className="text-ellipsis line-clamp-1">
            {trackOrder?.deliveryAddress}
          </p>
          <p className="font-semibold">รายการ :</p>
          <div className="w-full px-2">
            {trackOrder?.orderDetails.map((el) => (
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
          <p>{trackOrder?.summaryPrice} บาท</p>
        </div>
        <div className="flex justify-evenly items-center  w-full ">
          {trackOrder?.status === "WAITINGDELIVERY" && (
            <button
              onClick={() => handleConfirmDelivery(trackOrder.id)}
              className="flex justify-center items-center rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryDark active:bg-secondaryDark active:scale-90 "
            >
              ยืนยันการจัดส่ง
            </button>
          )}
          <ContractDropDown />
        </div>
      </footer>
    </div>
  );
}
