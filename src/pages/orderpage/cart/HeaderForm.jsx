import useOrder from "../../../hook/use-order";

export default function HeaderForm() {
  const { address, setAddress, error, setError } = useOrder();
  const handleOnChange = (e) => {
    if (error?.deliveryAddress) {
      const newError = { ...error };
      delete newError.deliveryAddress;
      setError(newError);
    }
    setAddress(e.target.value);
  };

  return (
    <header className="w-full bg-primary text-whitetext flex flex-col gap-1 items-center justify-center p-2">
      <h6 className="font-semibold">สรุปคำสั่งชื้อ</h6>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="font-light text-sm p-1">ที่อยู่จัดส่ง(จำเป็น)</p>

          {error?.deliveryAddress && (
            <span className="text-red text-sm font-light">
              กรุณาระบุที่อยู่จัดส่ง
            </span>
          )}
        </div>
        <input
          value={address}
          onChange={handleOnChange}
          type="text"
          className={`w-full rounded-lg bg-primary font-light border-2  px-2 py-1 focus:ring ${
            error?.deliveryAddress
              ? "border-red focus:ring-red"
              : "border-mybackground focus:ring-mybackground"
          }`}
        />
      </div>
    </header>
  );
}
