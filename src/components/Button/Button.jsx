export default function Button({
  message,
  onClick,
  size = "big",
  type = "primary",
}) {
  return (
    <div
      className={`flex justify-center items-center rounded-xl cursor-pointer ${
        size === "big"
          ? "w-[163px] h-[58px] font-bold text-xl"
          : "w-[125px] h-[50px] font-semibold text-lg"
      } ${
        type === "primary"
          ? "bg-secondary text-primary hover:bg-secondaryLight active:bg-secondaryDark active:scale-90"
          : "bg-primary text-whitetext hover:ring hover:ring-secondary active:bg-primaryDark active:scale-90"
      } `}
      onClick={onClick}
    >
      <p>{message}</p>
    </div>
  );
}
