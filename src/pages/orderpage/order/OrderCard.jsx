import HiddenCard from "./HiddenCard";

export default function OrderCard({ menuDetail }) {
  console.log(menuDetail);
  const { id, menuImage, menuName, price, status } = menuDetail;
  return (
    <div className="w-[200px] h-[260px] bg-primary rounded-2xl overflow-hidden relative">
      {status === "OUTOFSTOCK" && <HiddenCard />}
      <div className="w-[225px] h-[180px] overflow-hidden">
        <img
          src={menuImage}
          alt={menuName}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-whitetext h-[80px] flex flex-col justify-between items-center px-4 py-2">
        <p className="font-semibold text-xl line-clamp-1">{menuName}</p>
        <div className=" flex w-full justify-between">
          <p className="text-center text-[16px] line-clamp-2">{price} บาท</p>
          <button>add</button>
        </div>
      </div>
    </div>
  );
}
