import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useManage from "../../hook/use-manage";

const delay = 1000;

export default function OrderItem({
  orderDetail,
  styleColor,
  status,
  isTimer = true,
}) {
  // console.log(color);
  const now = new Date();
  const orderUpdatedAt = new Date(orderDetail.updatedAt);
  const diffTime = Math.floor((now - orderUpdatedAt) / 1000);
  //   console.log(diffTime);

  const navigate = useNavigate();
  const { handleNavigate } = useManage();

  const [totalSeconds, setTotalSeconds] = useState(diffTime);
  const [minute, setMinute] = useState(Math.floor(diffTime / 60));
  const [second, setSecond] = useState(diffTime % 60);

  if (isTimer) {
    useEffect(() => {
      const timer = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
        setMinute(Math.floor(totalSeconds / 60));
        setSecond(totalSeconds % 60);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, [totalSeconds]);
  }

  return (
    <div
      className="flex bg-primary p-2 rounded-full cursor-pointer truncate"
      onClick={() => navigate(`/admin/orders/manageOrder/${orderDetail.id}`)}
    >
      <p className="flex-[5] flex justify-start font-semibold text-lg px-3 ">
        {orderDetail.id}
      </p>
      {isTimer ? (
        <p className="flex-[2] flex justify-center font-semibold text-lg ">
          {minute < 10 ? "0" + minute : minute}:
          {second < 10 ? "0" + second : second}
        </p>
      ) : (
        <p className="flex-[2] flex justify-center font-semibold text-lg "></p>
      )}

      <p
        style={{ backgroundColor: styleColor }}
        className={`flex-[2] flex justify-center items-center font-semibold text-lg rounded-full `}
      >
        {status}
      </p>
    </div>
  );
}
