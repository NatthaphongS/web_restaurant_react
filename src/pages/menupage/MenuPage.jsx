import { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import ShowMenuCard from './ShowMenuCard';
import useMenu from '../../hook/use-menu';
import Loading from '../../components/Loading/Loading';

export default function MenuPage() {
  const [category, setCategory] = useState('MAIN');
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getMenu } = useMenu();
  useEffect(() => {
    getMenu(category)
      .then((res) => {
        setMenus(res.data.menus);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <>
      <HeaderMenu category={category} setCategory={setCategory} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 w-fit mx-auto gap-3 sm:grid-cols-3 mb-[50px]">
          {menus.map((el) => (
            <ShowMenuCard key={el.id} menuDetail={el} />
          ))}
        </div>
      )}
    </>
  );
}
