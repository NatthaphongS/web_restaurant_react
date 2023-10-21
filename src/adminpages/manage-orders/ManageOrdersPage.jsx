import { Outlet, useResolvedPath } from "react-router-dom";
import "./ManageOrderPage.css";

import OrderList from "./OrderList";
import useManage from "../../hook/use-manage";

export default function ManageOrderPage() {
  const { pathname } = useResolvedPath();
  const { searchId, setSearchId, handleSearch } = useManage();
  const handleChangeInput = (id) => {
    setSearchId(id);
  };

  return (
    <div
      style={{ height: "calc(100vh - 60px)" }}
      className="flex overflow-hidden"
    >
      <div className="flex-[7] bg-primaryLight p-3 text-whitetext">
        <div className="h-full  ">
          <div className="flex bg-primary p-2">
            <div className="flex-[5] flex justify-start gap-2 font-semibold text-2xl px-3">
              <p>หมายเลขคำสั่งชื้อ</p>
              <input
                type="text"
                onChange={(e) => {
                  handleChangeInput(e.target.value);
                  handleSearch(e.target.value);
                }}
                placeholder="ค้นหาหมายเลขคำสั่งชื่อ"
                value={searchId}
                className="text-primary text-sm rounded-full px-3 w-[200px]"
              />
            </div>
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
        {pathname === "/admin/orders" && (
          <div className="w-full h-full flex items-center justify-center px-3">
            <h6 className="text-center">
              โปรดเลือกคำสั่งชื้อที่ต้องการตรวจสอบ
            </h6>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
