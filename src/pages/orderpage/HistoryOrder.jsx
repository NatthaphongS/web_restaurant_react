import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";

const thaiOptions = {
  timeZone: "Asia/Bangkok",
  hour12: false,
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export default function HistoryOrder() {
  const [historyOrders, setHistoryOrders] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/order/historyOrders")
      .then((res) => setHistoryOrders(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex flex-col h-full">
      <header className="w-full bg-primary text-whitetext flex flex-col gap-1 items-center justify-center p-2">
        <h6 className="font-semibold">ประวัติการสั่งชื้อ</h6>
      </header>
      <div className=" h-full overflow-y-scroll pl-3 pt-3 flex flex-col gap-1  ">
        {historyOrders?.map((order) => (
          <div
            onClick={() => navigate(`/order/trackorder/${order.id}`)}
            key={order.id}
            className="border border-primary p-2 rounded-lg max-w-[300px] text-sm cursor-pointer"
          >
            <p className="truncate">
              <span className="font-semibold">หมาขเลขคำสั่งชื้อ</span> :{" "}
              {order.id}
            </p>
            <p>
              <span className="font-semibold">วันที่</span> :{" "}
              {new Date(order.createdAt).toLocaleString("th-TH", {
                thaiOptions,
              })}
            </p>
            <p>
              <span className="font-semibold">สถานะ</span> : {order.status}
            </p>
            {order.comment && (
              <p>
                <span className="font-semibold">หมายเหตุ</span> :{" "}
                {order.comment}
              </p>
            )}
            <p>
              <span className="font-semibold">ราคารวม</span> :{" "}
              {order.summaryPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
