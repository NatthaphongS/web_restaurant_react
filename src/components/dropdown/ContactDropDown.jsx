import useDropdown from "../../hook/use-dropdown";

export default function ContractDropDown() {
  const { isOpen, setIsOpen, dropDownEl } = useDropdown();
  return (
    <div className="relative" ref={dropDownEl}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center rounded-xl cursor-pointer px-2 w-fit py-2 bg-primaryLight text-whitetext hover:bg-primary hover:ring hover:ring-secondary  active:bg-primaryDark active:scale-90 "
      >
        ติดต่อเรา
      </div>
      {isOpen && (
        <div className="absolute w-80 bg-mybackground right-0 top-[-130px] translate-y-3 border-4 border-secondary rounded-lg shadow-md p-2 z-30 text-primary">
          <div className="flex items-center gap-5 p-2">
            <img src="/icons/Phone.png" className=" w-[30px] aspect-square" />
            <p className="text-lg font-semibold ">099-999-9999</p>
          </div>
          <div className="flex items-center gap-5 p-2">
            <img src="/icons/Email.png" className="w-[30px] aspect-square" />
            <p className="text-lg font-semibold whitespace-nowrap">
              Na-udonThani@gmail.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
