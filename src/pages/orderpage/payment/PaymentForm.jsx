import MainPayment from "./MainPayment";
import FooterPayment from "./FooterPayment";
import HeaderForm from "../cart/HeaderForm";

export default function PaymentForm() {
  return (
    <div className="flex flex-col h-full">
      <HeaderForm />
      <MainPayment />
      <FooterPayment />
    </div>
  );
}
