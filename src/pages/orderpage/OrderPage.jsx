import { useEffect, useState } from "react";
import OrderHeader from "./order/orderHeader";
import OrderCard from "./order/OrderCard";
import useMenu from "../../hook/use-menu";
import "./OrderPage.css";

export default function OrderPage() {
  const [category, setCategory] = useState("MAIN");
  const [menus, setMenus] = useState([]);
  const { getMenu } = useMenu();
  useEffect(() => {
    getMenu(category)
      .then((res) => setMenus(res.data.menus))
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <div style={{ height: "calc(100vh - 60px)" }} className="flex">
      <div className="h-full flex-[9] overflow-y-scroll overflow-x-hidden orderscroll">
        <OrderHeader category={category} setCategory={setCategory} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-fit mx-auto">
          {menus.map((el) => (
            <OrderCard key={el.id} menuDetail={el} />
          ))}
        </div>
      </div>
      <div className="h-full flex-[3] bg-primary"></div>
    </div>
  );
}
