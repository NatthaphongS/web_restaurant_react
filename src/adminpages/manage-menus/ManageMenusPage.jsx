import MenuList from "./MenuList";

export default function ManageMenuPage() {
  return (
    <div className="bg-primaryLight h-[91vh] overflow-auto">
      <div>
        <MenuList catagory={"MAIN"} />
        <MenuList catagory={"DESSERT"} />
        <MenuList catagory={"DRINK"} />
      </div>
    </div>
  );
}
