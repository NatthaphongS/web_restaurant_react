export default function HeaderForm() {
  return (
    <header className="w-full bg-primary text-whitetext flex flex-col gap-1 items-center justify-center p-2">
      <h6 className="font-semibold">สรุปคำสั่งชื้อ</h6>
      <div className="w-full">
        <p className="font-light text-sm p-1">ที่อยู่จัดส่ง(จำเป็น)</p>
        <input
          type="text"
          className="w-full rounded-lg bg-primary font-light border-2 border-mybackground px-2 py-1"
        />
      </div>
    </header>
  );
}
