import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function UserModal({ setIsOpen }) {
  const [form, setForm] = useState("login");
  return (
    <>
      <div className="fixed inset-0 bg-primary opacity-70 z-20"></div>
      <div className="fixed z-30 min-h-full inset-0 flex justify-center items-center ">
        <div className="relative">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <img src="/icons/Close.png" alt="Close" />
          </div>
          <div className="w-[540px] bg-primary flex flex-col items-center justify-center rounded-2xl gap-5 px-[72px] py-[46px]">
            <header className="bg-mybackground w-[316px] rounded-full flex">
              <div
                onClick={() => setForm("login")}
                className={`w-[145px] px-[30px] py-[10px] text-darktext rounded-full cursor-pointer ${
                  form == "login" ? "bg-secondary" : ""
                }`}
              >
                <p className="font-bold text-xl whitespace-nowrap">
                  เข้าสู่ระบบ
                </p>
              </div>
              <div
                onClick={() => setForm("register")}
                className={`flex-1 px-[30px] py-[10px] text-darktext rounded-full cursor-pointer ${
                  form == "register" ? "bg-secondary" : ""
                }`}
              >
                <p className="font-bold text-xl whitespace-nowrap">
                  สมัครสมาชิค
                </p>
              </div>
            </header>
            {form == "login" ? (
              <LoginForm setIsOpen={setIsOpen} />
            ) : (
              <RegisterForm setIsOpen={setIsOpen} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
