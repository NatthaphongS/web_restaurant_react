import { useLocation } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import Button from "../components/Button/Button";
import { useState } from "react";
import UserModal from "../components/usermodal/UserModal";
import useAuth from "../hook/use-auth";

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
      { id: 3, to: "/admin/summary", message: "สรุป" },
    ];
  }
  return (
    <nav className="flex items-center justify-end gap-[24px] text-whitetext">
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
        <Button message="สั่งชื้อตอนนี้" size="small" type="primary" />
      )}
      {!authUser && isOpen && <UserModal />}
      {authUser?.role === "MEMBER" && (
        <div className="w-[50px] aspect-square cursor-pointer">
          <img src="/icons/User.png" alt="user" />
        </div>
      )}
      {authUser?.role === "ADMIN" && (
        <div className="w-[50px] aspect-square cursor-pointer">
          <img src="/icons/User.png" alt="user" />
        </div>
      )}
    </nav>
  );
}
