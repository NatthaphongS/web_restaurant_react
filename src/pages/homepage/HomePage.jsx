import Button from "../../components/Button/Button";
import MenuCarousel from "./menuCarousel";
export default function HomePage() {
  return (
    <>
      <div className="h-[675px] flex w-full justify-center">
        <div className="flex items-center w-full max-w-[1440px] gap-[30px]">
          <div className="flex flex-col justify-center items-center gap-[32px] flex-[4]">
            <img src="./heroPic.png" alt="NaUdon" className="w-[304px]" />
            <div>
              <h5>"อร่อยครบรส เพราะชูรสครึ่งซอง"</h5>
            </div>
            <div className="flex gap-[100px]">
              <Button size="big" type="secondary" message="เข้าสู่ระบบ" />
              <Button size="big" type="primary" message="สั่งชื้อตอนนี้" />
            </div>
          </div>
          <div className="flex items-center flex-[6] gap-[60px] overflow-hidden h-[600px]">
            <img src="/pic1.png" alt="" className="w-[400px] h-[600px]" />
            <img src="/pic2.png" alt="" className="w-[300px] h-[450px]" />
          </div>
        </div>
      </div>
      <div className="h-[454px] bg-primary flex justify-center">
        <div className="h-full max-w-[1440] flex items-center justify-between gap-[40px]">
          <img src="/birthdayPro.png" alt="PromotionPicture" />
          <div className="flex flex-col gap-[25px] flex-0 max-w-[500px]">
            <h3 className="text-whitetext">สิทธิพิเศษสำหรับ ท่านสมาชิก</h3>
            <p className="text-whitetext whitespace-nowrap text-2xl">
              "วันเกิดรับส่วนลดสูงสุด 40% วันอื่น 50%"
            </p>
            <Button message="สมัครสมาชิก" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-[42px] max-w-[1440px] mx-auto my-7">
        <h2>เมนูแนะนำ</h2>
        <MenuCarousel />
        <Button message="ดูเมนูทั้งหมด" />
      </div>
      <div className="flex w-full max-w-[1440px] justify-center items-center mx-auto py-7 pb-[100px]">
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
        <div className="flex flex-[4] justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d36220.74542175247!2d102.76928825874349!3d17.400416433795588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzEzLjMiTiAxMDLCsDQ3JzM4LjkiRQ!5e0!3m2!1sth!2sth!4v1696944955981!5m2!1sth!2sth"
            className="w-[700px] h-[500px] rounded-2xl shadow-2xl shadow-primary"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </>
  );
}
