export default function HiddenCard() {
  return (
    <div className="absolute w-full h-full bg-primary bg-opacity-60">
      <div className="w-full h-[180px] flex justify-center items-center">
        <div className="text-whitetext w-fit px-1 aspect-square rounded-full border border-dashed border-mybackground flex justify-center items-center">
          หมดชั่วคราว
        </div>
      </div>
    </div>
  );
}
