import InputErrorMessage from "./InputErrorMessage";

export default function RegisterInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  hasError,
}) {
  return (
    <div className="flex-1">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        className={`block w-full border bg-primary rounded-md outline-none px-3 py-1.5 focus:ring-2 
      ${
        hasError
          ? "border-red focus:ring-red"
          : "border-mybackground focus:ring-secondary"
      }
        `}
        name={name}
        value={value}
        onChange={onChange}
      />
      {hasError && <InputErrorMessage message={hasError} />}
    </div>
  );
}
