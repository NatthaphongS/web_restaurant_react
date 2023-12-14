import { useState } from 'react';
import Button from '../components/Button/Button';
import UserModal from '../components/usermodal/UserModal';

export default function RequestLoginPage() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  return (
    <div
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className="bg-mybackground flex items-center justify-center flex-col gap-8 py-20"
    >
      <h3 className="text-[5vw] lg:text-[50px]">
        โปรดเข้าสู่ระบบก่อนสั่งอาหาร
      </h3>
      <div className="flex lg:h-[400px] gap-3 justify-center ">
        <img
          src="/promotion/prom1.png"
          alt="ส่วนลดพิเศษ"
          className="w-[30%] lg:w-[267px]"
        />
        <img
          src="/promotion/prom2.png"
          alt="ฟรีเบียร์"
          className="w-[30%] lg:w-[267px]"
        />
        <img
          src="/promotion/prom3.png"
          alt="ปาร์ตี้ปีใหม่"
          className="w-[30%] lg:w-[267px]"
        />
      </div>
      <div className="flex gap-10 justify-center items-center">
        <Button
          message="เข้าสู่ระบบ"
          type="secondary"
          onClick={() => setIsOpenLogin(true)}
        />
        {isOpenLogin && <UserModal setIsOpen={setIsOpenLogin} />}
        <Button message="สมัครสมาชิค" onClick={() => setIsOpenRegister(true)} />
        {isOpenRegister && (
          <UserModal setIsOpen={setIsOpenRegister} option="register" />
        )}
      </div>
    </div>
  );
}
