import MenuList from "./MenuList";

export default function ManageMenuPage() {
  return (
    <div className="bg-primaryLight h-[91vh] overflow-auto">
      <div>
        <MenuList category={"MAIN"} />
        <MenuList category={"DESSERT"} />
        <MenuList category={"DRINK"} />
      </div>
    </div>
  );
}
