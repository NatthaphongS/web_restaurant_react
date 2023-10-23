import { useState } from "react";
import useAuth from "../../hook/use-auth";
import useDropdown from "../../hook/use-dropdown";
import Button from "../Button/Button";
import EditProfileModal from "../usermodal/EditProfileModal";
import { Link, useNavigate } from "react-router-dom";

export default function UserDropDown() {
  const { authUser, logout } = useAuth();
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/order/trackOrder");
    setIsOpen(false);
  };

  return (
    <div className="relative h-full" ref={dropDownEl}>
      <div
        className="h-full aspect-square cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/icons/User.png" alt="user" className="h-full" />
      </div>
      {isEdit && <EditProfileModal setIsEdit={setIsEdit} />}
      {isOpen && (
        <>
          <div className="absolute w-80 bg-mybackground right-0 translate-y-3 border-4 border-myyellow rounded-lg shadow-md p-2 z-30">
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <div className="w-full flex flex-col items-start gap-2">
                <p className="text-darktext text-xl font-semibold truncate">{`${authUser.firstName} ${authUser.lastName}`}</p>
                <div
                  onClick={handleNavigate}
                  className="w-fit flex gap-1 items-center justify-end cursor-pointer border-primary border px-2 "
                >
                  <p className="text-primary text-sx">ประวัติการสั่งชื้อ</p>
                </div>
                <div
                  onClick={() => setIsEdit(true)}
                  className="w-fit flex gap-1 items-center justify-end cursor-pointer border-primary border px-2 "
                >
                  <img src="/icons/Edit.png" className="w-[20px] h-[20px]" />
                  <p className="text-primary text-sx">แก้ไขข้อมูลส่วนตัว</p>
                </div>

                <div className="flex item-center gap-3">
                  <img src="/icons/Phone.png" className="w-[25px]" />
                  <p className="text-darktext">: {`${authUser.mobile}`}</p>
                </div>
                <div className="flex item-center gap-3">
                  <img src="/icons/Email.png" className="w-[25px]" />
                  <p className="text-darktext">
                    : {`${authUser.email || "ไม่ระบุ"}`}
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="text-darktext">
                    ที่อยู่จัดส่ง : {`${authUser.address || "ไม่ระบุ"}`}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  message="ออกจากระบบ"
                  type="secondary"
                  size="small"
                  onClick={logout}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
