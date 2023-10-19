import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <div className="bg-primary w-full h-[60px] py-2 ">
        <div className="w-full h-full  flex items-center justify-between gap-1 px-[40px] sm:px-[120px] mx-auto">
          <img src="/logo.png" alt="ณ อุดร" className="h-full" />
          <NavBar />
        </div>
      </div>
    </>
  );
}
