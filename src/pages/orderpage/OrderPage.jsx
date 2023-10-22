import { useEffect, useState } from "react";
import OrderHeader from "./order/OrderHeader";
import OrderCard from "./order/OrderCard";
import useMenu from "../../hook/use-menu";
import "./OrderPage.css";
import { Link, Outlet, useResolvedPath } from "react-router-dom";
import useOrder from "../../hook/use-order";
import Loading from "../../components/Loading/Loading";
import Button from "../../components/Button/Button";

export default function OrderPage() {
  const [category, setCategory] = useState("MAIN");
  const [menus, setMenus] = useState([]);
  const { getMenu } = useMenu();
  const { pathname } = useResolvedPath();
  const { isLoading, ordering } = useOrder();

  useEffect(() => {
    getMenu(category)
      .then((res) => setMenus(res.data?.menus))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div style={{ height: "calc(100vh - 60px)" }} className="flex">
      <div className="flex-[9] relative">
        {pathname !== "/order" && (
          <div className="absolute bg-primary bg-opacity-70 z-10 w-full h-full">
            <div className="flex flex-col justify-center items-center w-full h-full px-10">
              <h4 className="text-whitetext text-center">
                {ordering ? (
                  "ไม่สามารถทำรายการได้ระหว่างการสั่งชื้อ"
                ) : pathname === "/order/payment" ? (
                  "ไม่สามารถแก้ไขรายการอาหารได้ ระหว่างการชำระเงิน"
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/thankImage.png" className="w-[100%]" />
                  </div>
                )}
              </h4>
            </div>
          </div>
        )}
        <div className="h-full  overflow-y-scroll overflow-x-hidden orderscroll">
          <OrderHeader category={category} setCategory={setCategory} />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-fit mx-auto">
            {menus.map((el) => (
              <OrderCard key={el.id} menuDetail={el} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex-[3] border-l-4 border-primary">
        {isLoading && <Loading />}
        <Outlet />
      </div>
    </div>
  );
}
