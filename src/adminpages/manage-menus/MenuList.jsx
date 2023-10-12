import AddMenuModal from "../../components/menumodal/AddMenuModal";
import EditMenuCard from "./EditMenuCard";
import "./MenuList.css";

export default function MenuList() {
  return (
    <div>
      <p className=" text-xl font-bold px-5 py-3 text-whitetext">จานหลัก</p>
      <div className="flex gap-[30px] pb-2 px-3 overflow-x-scroll menuscroll">
        <div className="w-[160px] flex-shrink-0 h-[200px] bg-secondaryLight rounded-3xl cursor-pointer"></div>
        <EditMenuCard />
        <AddMenuModal />
      </div>
    </div>
  );
}
