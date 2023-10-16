import { useState } from "react";
import AddMenuModal from "../../components/menumodal/AddMenuModal";

export default function AddMenuCard({ catagory, allMenu, setAllMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="w-[160px] flex-shrink-0 h-[200px] border-[8px] border-mybackground rounded-3xl cursor-pointer flex items-center justify-center"
      >
        <img src="/icons/Plus.png" alt="Add" />
      </div>
      {isOpen && (
        <AddMenuModal
          setIsOpen={setIsOpen}
          catagory={catagory}
          allMenu={allMenu}
          setAllMenu={setAllMenu}
        />
      )}
    </>
  );
}
