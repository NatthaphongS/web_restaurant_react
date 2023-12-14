import { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import ShowMenuCard from './ShowMenuCard';
import useMenu from '../../hook/use-menu';

export default function MenuPage() {
  const [category, setCategory] = useState('MAIN');
  const [menus, setMenus] = useState([]);
  const { getMenu } = useMenu();
  useEffect(() => {
    getMenu(category)
      .then((res) => setMenus(res.data.menus))
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <>
      <HeaderMenu category={category} setCategory={setCategory} />
      <div className="grid grid-cols-2 w-fit mx-auto gap-3 sm:grid-cols-3 mb-[50px]">
        {menus.map((el) => (
          <ShowMenuCard key={el.id} menuDetail={el} />
        ))}
      </div>
    </>
  );
}
