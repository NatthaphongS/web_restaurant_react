import { useState } from "react";
import EditMenuModal from "../../components/menumodal/EditMenuModal";

export default function EditMenuCard({ menuDetail, allMenu, setAllMenu }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsEdit(true);
        }}
        className="w-[160px] flex-shrink-0 h-[200px] bg-mybackground rounded-3xl overflow-hidden cursor-pointer border border-primary"
      >
        <div className="w-[160px] h-[150px] overflow-hidden">
          <img
            src={menuDetail?.menuImage}
            alt={menuDetail?.menuName}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-[130px] mx-auto flex items-center justify-center h-[50px]">
          <p className="text-lg truncate">{menuDetail?.menuName}</p>
        </div>
      </div>
      {isEdit && (
        <EditMenuModal
          menuDetail={menuDetail}
          setIsEdit={setIsEdit}
          allMenu={allMenu}
          setAllMenu={setAllMenu}
        />
      )}
    </>
  );
}
