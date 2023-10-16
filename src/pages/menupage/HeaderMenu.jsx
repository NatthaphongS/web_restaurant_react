export default function HeaderMenu({ category, setCategory }) {
  return (
    <>
      <header className="w-full flex flex-col gap-6 py-5 justify-center items-center">
        <h3>เมนู</h3>
        <div className="max-w-[500px] sm:max-w-[800px] w-full flex justify-evenly ">
          <p
            onClick={() => setCategory("MAIN")}
            className={`px-[15px] py-[8px] text-xl cursor-pointer font-bold text-primary rounded-full ${
              category == "MAIN" ? "bg-myyellow" : ""
            }`}
          >
            จานหลัก
          </p>
          <p
            onClick={() => setCategory("DESSERT")}
            className={`px-[15px] py-[8px] text-xl cursor-pointer font-bold text-primary rounded-full ${
              category == "DESSERT" ? "bg-myyellow" : ""
            }`}
          >
            ของหวาน
          </p>
          <p
            onClick={() => setCategory("DRINK")}
            className={`px-[15px] py-[8px] text-xl cursor-pointer font-bold text-primary rounded-full ${
              category == "DRINK" ? "bg-myyellow" : ""
            }`}
          >
            เครื่องดื่ม
          </p>
        </div>
      </header>
    </>
  );
}
