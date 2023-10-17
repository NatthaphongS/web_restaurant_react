export default function FooterForm() {
  return (
    <footer className="bg-primary w-full text-whitetext px-3 pb-3 pt-2">
      <div className="flex justify-between px-5">
        <p>ราคารวม</p>
        <p>1095 บาท</p>
      </div>
      <button className=" mx-auto flex justify-center items-center rounded-xl cursor-pointer px-3 w-fit py-2 font-semibold text-lg bg-secondary text-primary hover:bg-secondaryLight active:bg-secondaryDark active:scale-90 ">
        ยืนยันคำสั่งชื้อ
      </button>
    </footer>
  );
}
