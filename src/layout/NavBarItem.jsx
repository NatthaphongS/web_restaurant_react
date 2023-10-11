import { Link } from "react-router-dom";

export default function NavBarItem({ to, message, active }) {
  return (
    <Link to={to}>
      <div
        className={`text-2xl font-semibold hover:scale-110 active:scale-90 ${
          active ? "text-secondary underline" : ""
        }`}
      >
        <p className="whitespace-nowrap">{message}</p>
      </div>
    </Link>
  );
}
