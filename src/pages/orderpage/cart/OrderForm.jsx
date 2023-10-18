import { useState } from "react";
import useOrder from "../../../hook/use-order";
import FooterForm from "./FooterForm";
import HeaderForm from "./HeaderForm";
import ListsForm from "./ListsForm";
import useAuth from "../../../hook/use-auth";

export default function OrderForm() {
  const { createOrder } = useOrder();
  const { authUser } = useAuth();
  const [address, setAddress] = useState(authUser.address);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createOrder();
  };

  return (
    <form className="flex flex-col h-full" onSubmit={handleSubmitForm}>
      <HeaderForm />
      <ListsForm />
      <FooterForm />
    </form>
  );
}
