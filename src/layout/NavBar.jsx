import { Link, useLocation } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import Button from "../components/Button/Button";

export default function NavBar() {
  const { pathname } = useLocation();
  const menus = [
    { id: 1, to: "/", message: "หน้าหลัก" },
    { id: 2, to: "/menu", message: "เมนู" },
    { id: 3, to: "/login", message: "เข้าสู่ระบบ" },
  ];
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
      <Button message="สั่งชื้อตอนนี้" size="small" type="primary" />
    </nav>
  );
}
