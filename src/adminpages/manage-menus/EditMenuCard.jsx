export default function EditMenuCard() {
  return (
    <div className="w-[160px] flex-shrink-0 h-[200px] bg-mybackground rounded-3xl overflow-hidden cursor-pointer border border-primary">
      <div className="w-[160px] h-[150px] overflow-hidden">
        <img
          src="/3.png"
          alt="Image Picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[130px] mx-auto flex items-center justify-center h-[50px]">
        <p className="text-lg truncate">ไก่ทอด</p>
      </div>
    </div>
  );
}
