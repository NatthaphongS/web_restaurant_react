export default function LoginInput({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="text-sm px-2 text-whitetext">{label}</label>
      <input
        type={type}
        className="block w-full rounded-xl text-whitetext px-4 py-2 outline-none bg-primary border border-mybackground focus:ring-2 focus:ring-secondary "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
