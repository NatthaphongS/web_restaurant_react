export default function OrderHeader({ category, setCategory }) {
  const navclass =
    "px-[15px] py-[6px] text-lg cursor-pointer font-bold text-primary rounded-full";
  return (
    <>
      <header className="w-full flex flex-col gap-2 py-5 justify-center items-center">
        <h4>สั่งอาหาร</h4>
        <div className="max-w-[500px] sm:max-w-[800px] w-full flex justify-evenly ">
          <p
            onClick={() => setCategory("MAIN")}
            className={`${navclass} ${category == "MAIN" ? "bg-myyellow" : ""}`}
          >
            จานหลัก
          </p>
          <p
            onClick={() => setCategory("DESSERT")}
            className={`${navclass} ${
              category == "DESSERT" ? "bg-myyellow" : ""
            }`}
          >
            ของหวาน
          </p>
          <p
            onClick={() => setCategory("DRINK")}
            className={`${navclass} ${
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
