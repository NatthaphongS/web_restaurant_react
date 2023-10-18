import useAuth from "../../hook/use-auth";
import useDropdown from "../../hook/use-dropdown";
import Button from "../Button/Button";

export default function AdminDropDown() {
  const { authUser, logout } = useAuth();
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();
  return (
    <div className="relative" ref={dropDownEl}>
      <div
        className="w-[6vh] aspect-square cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/icons/Admin.png" alt="user" className="w-full" />
      </div>
      {isOpen && (
        <div className="absolute w-80 bg-mybackground right-0 translate-y-3 border-4 border-secondary rounded-lg shadow-md p-2 z-30">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-col items-start gap-2">
              <p className="text-darktext text-xl font-semibold">{`${authUser.firstName} ${authUser.lastName}`}</p>
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
      )}
    </div>
  );
}
