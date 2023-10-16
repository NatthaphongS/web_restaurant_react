import { useEffect, useState } from "react";

import EditMenuCard from "./EditMenuCard";
import "./MenuList.css";
import AddMenuCard from "./AddMenuCard";
import useMenu from "../../hook/use-menu";

export default function MenuList({ catagory }) {
  const { getMenu } = useMenu();
  const [allMenu, setAllMenu] = useState([]);

  useEffect(() => {
    getMenu(catagory).then((res) => setAllMenu(res.data.menus));
  }, []);

  return (
    <div>
      <p className=" text-xl font-bold px-5 py-3 text-whitetext">{catagory}</p>
      <div className="flex gap-[30px] pb-2 px-3 overflow-x-scroll menuscroll">
        {allMenu.map((menuDetail) => (
          <EditMenuCard
            key={menuDetail?.id}
            menuDetail={menuDetail}
            allMenu={allMenu}
            setAllMenu={setAllMenu}
          />
        ))}
        <AddMenuCard
          catagory={catagory}
          allMenu={allMenu}
          setAllMenu={setAllMenu}
        />
      </div>
    </div>
  );
}
