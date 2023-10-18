import FooterForm from "./FooterForm";
import HeaderForm from "./HeaderForm";
import ListsForm from "./ListsForm";

export default function OrderForm() {
  return (
    <div className="flex flex-col h-full">
      <HeaderForm />
      <ListsForm />
      <FooterForm />
    </div>
  );
}
