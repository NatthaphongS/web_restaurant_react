import { useEffect, useState } from "react";
import AddMenuModal from "../../components/menumodal/AddMenuModal";
import EditMenuCard from "./EditMenuCard";
import "./MenuList.css";
import axios from "axios";

export default function MenuList({ catagory }) {
  const [allMenu, setAllMenu] = useState([]);
  useEffect(() => {
    axios
      .get(`/menu/${catagory}`)
      .then((res) => {
        setAllMenu(res.data.menus);
      })
      .catch(console.log);
  }, []);
  return (
    <div>
      <p className=" text-xl font-bold px-5 py-3 text-whitetext">{catagory}</p>
      <div className="flex gap-[30px] pb-2 px-3 overflow-x-scroll menuscroll">
        {allMenu.map((menuDetail) => (
          <EditMenuCard key={menuDetail?.id} menuDetail={menuDetail} />
        ))}
        <AddMenuModal catagory={catagory} />
      </div>
    </div>
  );
}
