import useOrder from "../../../hook/use-order";
import ListItem from "./ListItem";

export default function ListsForm() {
  const { order } = useOrder();
  return (
    <div className="h-full p-2 overflow-y-scroll font-semibold">
      {order.map((list) => (
        <ListItem key={list.id} listDetail={list} />
      ))}
    </div>
  );
}
