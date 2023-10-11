import { useState } from "react";

export default function AddMenuModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="w-[160px] flex-shrink-0 h-[200px] border-[8px] border-mybackground rounded-3xl cursor-pointer flex items-center justify-center"
      >
        <img src="/icons/Plus.png" alt="Add" />
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-primary opacity-70 z-20"></div>
          <div className="fixed z-30 min-h-full inset-0 flex justify-center items-center">
            <div className="w-[540px] bg-mybackground rounded-3xl overflow-hidden">
              <header className="bg-primary flex items-center justify-center h-[65px]">
                <h5 className="text-whitetext">เพิ่มรายการอาหาร</h5>
              </header>
              <main className="px-[30px] py-[10px] flex flex-col gap-[15px]">
                <div className="w-[160px] h-[160px] border-8 border-primary cursor-pointer rounded-2xl flex justify-center items-center">
                  <img src="/icons/PlusDark.png" />
                </div>
                <input
                  type="text"
                  placeholder="ชื่ออาหาร"
                  className="border-b-2 px-2 bg-mybackground text-xl w-full outline-none"
                />
                <textarea
                  className="block w-full outline-none resize-none border border-primary p-2"
                  rows="4"
                  placeholder="ข้อมูลเพิ่มเติม"
                />

                <select>
                  <option value="" disabled selected>
                    เลือกชนิดอาหาร
                  </option>
                  <option value="MAIN">จานหลัก</option>
                  <option value="">ของหวาน</option>
                  <option>เครื่องดื่ม</option>
                </select>
              </main>
              <footer className="h-[75px] bg-primary">
                <div></div>
                <div></div>
              </footer>
            </div>
          </div>
        </>
      )}
    </>
  );
}
