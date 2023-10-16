import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <div className="bg-primary w-full h-[80px] gap-10 flex items-center justify-between sm:px-[120px] px-[20px]">
        <img src="../../public/logo.png" alt="ณ อุดร" className="h-[7vh]" />
        <NavBar />
      </div>
    </>
  );
}
