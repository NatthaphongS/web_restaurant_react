import { Link, useLocation } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import Button from "../components/Button/Button";
import { useState } from "react";
import UserModal from "../components/usermodal/UserModal";
import useAuth from "../hook/use-auth";
import UserDropDown from "../components/dropdown/UserDropDown";
import AdminDropDown from "../components/dropdown/AdminDropDown";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { authUser } = useAuth();

  let menus = [
    { id: 1, to: "/", message: "หน้าหลัก" },
    { id: 2, to: "/menu", message: "เมนู" },
  ];

  if (authUser?.role == "ADMIN") {
    menus = [
      { id: 1, to: "/admin/orders", message: "จัดการออเดอร์" },
      { id: 2, to: "/admin/menus", message: "จัดการเมนู" },
      { id: 3, to: "/admin/", message: "สรุป" },
    ];
  }
  return (
    <nav className="flex items-center justify-end gap-[24px] text-whitetext h-full">
      {menus.map((el) => (
        <NavBarItem
          key={el.id}
          to={el.to}
          message={el.message}
          active={pathname === el.to}
        />
      ))}
      {!authUser && (
        <div
          onClick={() => setIsOpen(true)}
          className={`text-2xl font-semibold hover:scale-110 cursor-pointer active:scale-90 }`}
        >
          <p className="whitespace-nowrap ">เข้าสู่ระบบ</p>
        </div>
      )}
      {authUser?.role != "ADMIN" && (
        <Link to="/order">
          <div className="flex justify-center items-center rounded-xl cursor-pointer w-[125px] h-[40px] font-semibold text-lg bg-secondary text-primary hover:bg-secondaryLight active:bg-secondaryDark active:scale-90 ">
            <p>สั่งซื้ออาหาร</p>
          </div>
        </Link>
      )}
      {!authUser && isOpen && <UserModal setIsOpen={setIsOpen} />}
      {authUser?.role === "MEMBER" && <UserDropDown />}
      {authUser?.role === "ADMIN" && <AdminDropDown />}
    </nav>
  );
}
