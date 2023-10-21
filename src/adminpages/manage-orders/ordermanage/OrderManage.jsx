import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axios";
import useManage from "../../../hook/use-manage";
import Loading from "../../../components/Loading/Loading";
import CancleOrderDropDown from "../../../components/dropdown/CancleOrderDropDown";

export default function OrderManage() {
  const { orderId } = useParams();
  const { isLoading, setIsLoading, targetOrder, setTargetOrder, updateOrder } =
    useManage();

  const handleClick = async () => {
    let status;
    if (targetOrder.status === "WAITINGPREVIEW") {
      status = "COOKING";
    }
    if (targetOrder.status === "COOKING") {
      status = "WAITINGDELIVERY";
    }
    if (targetOrder.status === "WAITINGDELIVERY") {
      status = "COMPLETE";
    }
    await updateOrder(targetOrder.id, status);
  };

  useEffect(() => {
    axios
      .get(`/order/orderTarget/${orderId}`)
      .then((res) => {
        setTargetOrder(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [orderId]);
  return (
    <div className="h-full flex flex-col justify-between">
      {isLoading && <Loading />}
      <div className="bg-primary text-whitetext flex items-center justify-center py-2">
        <h5 className="font-semibold">รายละเอียดคำสั่งชื้อ</h5>
      </div>
      <div className="overflow-y-scroll h-full">
        <div className="flex flex-col items-start text-ellipsis px-2 pt-2">
          <p className="text-ellipsis line-clamp-1 font-semibold">
            หมายเลขคำสั่งชื้อ :
          </p>
          <p className="text-ellipsis line-clamp-1">{orderId}</p>
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">สถานะ</span>:{" "}
            {targetOrder?.status === "WAITINGPREVIEW"
              ? "รอตรวจสอบ"
              : targetOrder?.status === "COOKING"
              ? "กำลังทำอาหาร"
              : targetOrder?.status === "WAITINGDELIVERY"
              ? "กำลังจัดส่ง"
              : targetOrder?.status === "COMPLETE"
              ? "สำเร็จ"
              : "ยกเลิก"}
          </p>
          {targetOrder?.comment && (
            <p className="text-ellipsis line-clamp-1">
              <span className="font-semibold">หมายเหตุ</span> :{" "}
              {targetOrder?.comment}
            </p>
          )}
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">ชื่อ-สกุล</span>:{" "}
            {targetOrder?.user?.firstName} {targetOrder?.user?.lastName}
          </p>
          <p className="text-ellipsis line-clamp-1">
            <span className="font-semibold">เบอร์โทร</span> :{" "}
            {targetOrder?.user?.mobile}
          </p>
          <p className="text-ellipsis line-clamp-1 font-semibold">
            ที่อยู่จัดส่ง :
          </p>
          <p className="text-ellipsis line-clamp-1">
            {targetOrder?.deliveryAddress}
          </p>
          <p className="font-semibold">รายการ :</p>
          <div className="w-full px-2">
            {targetOrder?.orderDetails?.map((el) => (
              <div key={el?.id} className=" flex justify-between">
                <p className="truncate max-w-[150px] xl:max-w-[200px]">
                  {el?.amount} x {el?.menu?.menuName}
                </p>
                <p className="truncate">{el?.price} บาท</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-1 py-2 w-full font-bold text-2xl">
            <p>ราคารวม</p>
            <p>{targetOrder?.summaryPrice} บาท</p>
          </div>
          <div className="flex  flex-col justify-between px-1 py-2 w-full font-bold text-xl">
            <p>หลักฐานการชำระเงิน</p>
            <img src={targetOrder?.paymentImage} className="rounded-xl" />
          </div>
        </div>
      </div>
      {targetOrder.status !== "CANCLE" && targetOrder.status !== "COMPLETE" && (
        <footer className="bg-primary w-full text-whitetext  px-3 py-3">
          <div className="flex justify-between items-center gap-5 w-full pr-2">
            <button
              onClick={handleClick}
              className="flex flex-[9] justify-center items-center rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryDark active:bg-secondaryDark active:scale-90 "
            >
              {targetOrder.status === "WAITINGPREVIEW"
                ? "ยืนยันการตรวจสอบ"
                : targetOrder.status === "COOKING"
                ? "ทำอาหารเสร็จแล้ว"
                : "จัดส่งเรียบร้อย"}
            </button>

            <CancleOrderDropDown />
          </div>
        </footer>
      )}
    </div>
  );
}
