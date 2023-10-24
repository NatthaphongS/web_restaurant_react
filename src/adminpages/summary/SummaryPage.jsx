import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { BarChart } from "./components/BarChart";
import axios from "../../config/axios";

Chart.register(CategoryScale);

function getPast7Days() {
  const today = new Date();
  const past7Days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    past7Days.push(date.toISOString().split("T")[0]);
  }

  return past7Days;
}
const past7Days = getPast7Days();

const mapOrder = (array) => {
  const order = [];
  let orderIndex = 0;
  past7Days.map((day) => {
    order.push(0);
    array.map((el) => {
      if (el.date.startsWith(day)) {
        order.splice(orderIndex, 1, el?.countOrder);
      }
    });
    orderIndex++;
  });
  return order;
};

export default function SummaryPage() {
  const [completeOrder, setCompleteOrder] = useState([]);
  const [member, setMember] = useState(0);
  const [totalToday, setTotalToday] = useState({});
  const [cancelOrder, setCancelOrder] = useState([]);
  useEffect(() => {
    axios
      .get("/order/getSummary")
      .then((res) => {
        setCompleteOrder(mapOrder(res.data.newCompleteResult));
        setCancelOrder(mapOrder(res.data.newCancelResult));
        setMember(res.data.totalMember);
        setTotalToday(res.data.totalToday);
      })
      .catch((err) => console.log(err));
    // IIFE : Intermidiatly invoke
    // (async ()=> {})()
  }, []);

  // console.log(totalToday);

  const chartData = {
    labels: past7Days,
    datasets: [
      {
        label: "COMPLETE",
        data: completeOrder,
        backgroundColor: "#94CE61",
      },
      {
        label: "CANCEL",
        data: cancelOrder,
        backgroundColor: "#ff3333",
      },
    ],
  };

  return (
    <div
      style={{ height: "calc(100vh - 60px)" }}
      className="flex overflow-hidden bg-primaryLight w-full"
    >
      <div className="flex w-fit items-center justify-center mx-auto gap-10">
        <div className="flex justify-evenly p-8 flex-col h-full">
          <div className="bg-secondary p-3 w-[250px] rounded-lg">
            <p>จำนวนสมาชิค ณ ปัจจุบัน</p>
            <h6>{member}</h6>
          </div>
          <div className="bg-secondary p-3 w-[250px] rounded-lg">
            <p>ยอดขายวันนี้</p>
            <h6>
              {totalToday.date?.startsWith(past7Days[0])
                ? `${totalToday.totalSummaryPrice}`
                : 0}
            </h6>
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-5">
          <div className="w-[800px]">
            <BarChart chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
