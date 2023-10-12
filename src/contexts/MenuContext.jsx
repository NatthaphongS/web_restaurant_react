import { useEffect } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";

export const MenuContext = createContext();

export default function MenuContextProvider({ children }) {
  const [allMenu, setAllMenu] = useState([]); // [{},{},{},{},{}]
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/menu/all`)
      .then((res) => setAllMenu(res.data.allMenus))
      .catch(console.log)
      .finally(() => setInitialLoading(false));
  }, []);

  return (
    <MenuContext.Provider value={{ allMenu, setAllMenu, initialLoading }}>
      {children}
    </MenuContext.Provider>
  );
}
