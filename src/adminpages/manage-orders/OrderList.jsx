import { useEffect, useState } from "react";
import useManage from "../../hook/use-manage";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const { allOrders, searchOrders, searchId, targetOrder } = useManage();
  const [showOrders, setShowOrders] = useState([]);
  useEffect(() => {
    if (searchId) {
      setShowOrders(searchOrders);
    } else {
      setShowOrders(allOrders);
    }
  }, [searchId, allOrders]);

  return (
    <>
      {showOrders.map((el) => {
        if (el.status === "WAITINGPREVIEW") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              styleColor="#FFC633"
              status="รอตรวจสอบ"
            />
          );
        }
      })}
      {showOrders.map((el) => {
        if (el.status === "COOKING") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              styleColor="#FF5A36"
              status="กำลังทำอาหาร"
            />
          );
        }
      })}
      {showOrders.map((el) => {
        if (el.status === "WAITINGDELIVERY") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              styleColor="#0EA5E9"
              status="กำลังจัดส่ง"
            />
          );
        }
      })}
      {showOrders.map((el) => {
        if (el.status === "COMPLETE") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              styleColor="#94CE61"
              status="สำเร็จ"
              isTimer={false}
            />
          );
        }
      })}
      {showOrders.map((el) => {
        if (el.status === "CANCLE") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              styleColor="#3B3B3B"
              status="ยกเลิก"
              isTimer={false}
            />
          );
        }
      })}
    </>
  );
}
