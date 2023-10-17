export default function ListItem({ listDetail }) {
  //   console.log(listDetail);
  return (
    <div className="flex justify-between gap-2 w-full">
      <p className="truncate max-w-[150px] xl:max-w-[200px]">
        {listDetail?.amount} x {listDetail?.menuName}
      </p>
      <p className="truncate">{listDetail?.amount * listDetail?.price} ฿</p>
    </div>
  );
}
