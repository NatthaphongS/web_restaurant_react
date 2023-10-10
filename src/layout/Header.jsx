import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <div className="bg-primary w-full h-[70px] flex gap-5 items-center justify-between px-[120px]">
        <img src="../../public/logo.png" alt="ณ อุดร" className="w-[56px]" />
        <NavBar />
      </div>
    </>
  );
}
