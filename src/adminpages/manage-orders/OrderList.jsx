import useManage from "../../hook/use-manage";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const { allOrders } = useManage();
  return (
    <>
      {allOrders.map((el) => {
        if (el.status === "WAITINGPREVIEW") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              color="myyellow"
              status="รอตรวจสอบ"
            />
          );
        }
      })}
      {allOrders.map((el) => {
        if (el.status === "COOKING") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              color="secondary"
              status="กำลังทำอาหาร"
            />
          );
        }
      })}
      {allOrders.map((el) => {
        if (el.status === "WAITINGDELIVERY") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              color="myblue"
              status="กำลังจัดส่ง"
            />
          );
        }
      })}
      {allOrders.map((el) => {
        if (el.status === "COMPLETE") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              color="mygreen"
              status="สำเร็จ"
              isTimer={false}
            />
          );
        }
      })}
      {allOrders.map((el) => {
        if (el.status === "CANCLE") {
          return (
            <OrderItem
              key={el.id}
              orderDetail={el}
              color="primaryLight"
              status="ยกเลิก"
              isTimer={false}
            />
          );
        }
      })}
    </>
  );
}
