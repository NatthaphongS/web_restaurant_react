import { useState } from "react";
import AddMenuModal from "../../components/menumodal/AddMenuModal";

export default function MenuList() {
  return (
    <div>
      <p className="text-darktext text-xl font-bold px-5 py-3">จานหลัก</p>
      <div className="flex gap-[30px] px-3 overflow-x-scroll">
        <div className="w-[160px] flex-shrink-0 h-[200px] bg-secondaryLight rounded-3xl cursor-pointer"></div>
        <div className="w-[160px] flex-shrink-0 h-[200px] bg-secondaryLight rounded-3xl cursor-pointer"></div>
        <AddMenuModal />
      </div>
    </div>
  );
}
