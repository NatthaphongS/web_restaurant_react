export default function ShowMenuCard({ menuDetail }) {
  return (
    <div className="w-[225px] h-[290px] bg-primary rounded-2xl overflow-hidden">
      <div className="w-[225px] h-[200px] overflow-hidden">
        <img
          src={menuDetail.menuImage}
          alt={menuDetail.menuName}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-whitetext h-[90px] flex flex-col justify-center items-center px-4 py-2">
        <p className="font-semibold text-xl text-ellipsis line-clamp-1">
          {menuDetail.menuName}
        </p>
        <p className="text-center text-[16px] line-clamp-2">
          {menuDetail.description}
        </p>
      </div>
    </div>
  );
}
