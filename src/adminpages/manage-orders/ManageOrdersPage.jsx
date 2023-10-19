import { Outlet } from "react-router-dom";
import "./ManageOrderPage.css";
import OrderItem from "./OrderItem";
import useManage from "../../hook/use-manage";
import OrderList from "./OrderList";

export default function ManageOrderPage() {
  const { allOrders } = useManage();
  console.log(allOrders);
  return (
    <div
      style={{ height: "calc(100vh - 60px)" }}
      className="flex overflow-hidden"
    >
      <div className="flex-[7] bg-primaryLight p-3 text-whitetext">
        <div className="h-full  ">
          <div className="flex bg-primary p-2">
            <p className="flex-[5] flex justify-start font-semibold text-2xl px-3">
              หมายเลขคำสั่งชื้อ
            </p>
            <p className="flex-[2] flex justify-center font-semibold text-2xl">
              ระยะเวลา
            </p>
            <p className="flex-[2] flex justify-center font-semibold text-2xl">
              สถานะ
            </p>
          </div>
          <div className="h-full overflow-y-scroll overflow-x-hidden manageorderscroll flex flex-col gap-3 py-2">
            <OrderList />
          </div>
        </div>
      </div>
      <div className="h-full flex-[3] border-l-4 border-primary">
        <Outlet />
      </div>
    </div>
  );
}
