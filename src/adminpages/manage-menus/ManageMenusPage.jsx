import MenuList from "./MenuList";

export default function ManageMenuPage() {
  return (
    <div
      className="bg-primaryLight overflow-auto"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div>
        <MenuList category={"MAIN"} />
        <MenuList category={"DESSERT"} />
        <MenuList category={"DRINK"} />
      </div>
    </div>
  );
}
