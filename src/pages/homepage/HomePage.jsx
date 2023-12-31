import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import HeroSlideShow from './HeroSlideShow';
import MenuCarousel from './MenuCarousel';
import { useState } from 'react';
import UserModal from '../../components/usermodal/UserModal';
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lg:h-[675px] flex w-full justify-center pt-10">
        <div className="flex  items-center w-full max-w-[1440px] gap-[30px] flex-wrap pl-10 lg:pl-0">
          <div className="flex flex-col justify-center items-center gap-[32px] z-10 flex-[6] lg:flex-[4] ">
            <img src="./heroPic.png" alt="NaUdon" className="w-[304px]" />
            <div>
              <h5>"อร่อยครบรส เพราะชูรสครึ่งซอง"</h5>
            </div>
            <div className="flex gap-[100px]">
              <Button
                size="big"
                type="secondary"
                message="เข้าสู่ระบบ"
                onClick={() => setIsOpen(true)}
              />
              {isOpen && <UserModal setIsOpen={setIsOpen} />}
              <Link to="/order">
                <Button size="big" type="primary" message="สั่งชื้อตอนนี้" />
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-[6] gap-[60px] h-[600px] ml-[-500px] overflow-hidden">
            <HeroSlideShow />
          </div>
        </div>
      </div>
      <div className="lg:h-[454px] bg-primary flex justify-center w-full py-5">
        <div className="h-full max-w-[1440] flex flex-col items-center lg:justify-between gap-[40px] lg:flex-row">
          <img
            src="/birthdayPro.png"
            alt="PromotionPicture"
            className="w-[80%] lg:w-[50%]"
          />
          <div className="flex flex-col gap-[25px] flex-0 max-w-[500px] lg:w-[50%]">
            <h3 className="text-whitetext text-[40px] lg:text-[55px]">
              สิทธิพิเศษสำหรับ<br></br>ท่านสมาชิก
            </h3>
            <p className="text-whitetext whitespace-nowrap text-2xl">
              "วันเกิดรับส่วนลดสูงสุด 40% วันอื่น 50%"
            </p>
            <Button message="สมัครสมาชิก" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-[42px] max-w-[1440px] w-full mx-auto my-7 overflow-hidden">
        <h2>เมนูแนะนำ</h2>
        <MenuCarousel />
        <Link to="/menu">
          <Button message="ดูเมนูทั้งหมด" />
        </Link>
      </div>
      <div className="flex w-full flex-col gap-5 max-w-[1440px] justify-center items-center mx-auto py-7 pb-[100px] lg:flex-row">
        <div className="flex flex-[2] items-center justify-center">
          <div className=" flex flex-col gap-5 px-[80px]">
            <h3>ติดต่อเรา</h3>
            <div className="flex items-center gap-5">
              <img src="/icons/Phone.png" className=" w-[50px] aspect-square" />
              <p className="text-3xl font-bold">099-999-9999</p>
            </div>
            <div className="flex items-center gap-5">
              <img src="/icons/Email.png" className="w-[50px] aspect-square" />
              <p className="text-3xl font-bold whitespace-nowrap">
                Na-udonThani@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-[4] justify-center items-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d36220.74542175247!2d102.76928825874349!3d17.400416433795588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzEzLjMiTiAxMDLCsDQ3JzM4LjkiRQ!5e0!3m2!1sth!2sth!4v1696944955981!5m2!1sth!2sth"
            className="aspect-video w-[80%] rounded-2xl shadow-2xl shadow-primary"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </>
  );
}
