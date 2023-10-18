import useOrder from "../../../hook/use-order";
import ListItem from "./ListItem";

export default function ListsForm() {
  const { order, error } = useOrder();
  return (
    <div className="h-full p-2 overflow-y-scroll font-semibold">
      {error?.orderDetail && (
        <p className="mx-auto w-fit text-red">กรุณาเลือกรายการอาหาร</p>
      )}
      {order.map((list) => (
        <ListItem key={list.id} listDetail={list} />
      ))}
    </div>
  );
}
