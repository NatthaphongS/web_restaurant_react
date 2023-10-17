import Button from "../../../components/Button/Button";
import FooterForm from "./FooterForm";
import HeaderForm from "./HeaderForm";
import ListsForm from "./ListsForm";

export default function OrderForm() {
  return (
    <form className="flex flex-col h-full">
      <HeaderForm />
      <ListsForm />
      <FooterForm />
    </form>
  );
}
