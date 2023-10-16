import { useState, useRef } from "react";

import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import useMenu from "../../hook/use-menu";

export default function EditMenuModal({
  menuDetail,
  setIsEdit,
  allMenu,
  setAllMenu,
}) {
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);
  const [input, setInput] = useState({
    menuImage: menuDetail?.menuImage,
    menuName: menuDetail?.menuName,
    category: menuDetail?.category,
    price: menuDetail?.price,
    status: menuDetail?.status,
    description: menuDetail?.description || "",
  });
  const { addMenuSchema: editMenuSchema, editMenu, deleteMenu } = useMenu();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleDeleteMenu = async () => {
    try {
      await deleteMenu(menuDetail.id);
      const allNewMenu = allMenu.filter((el) => el.id != menuDetail.id);
      setAllMenu(allNewMenu);
      toast.success("ลบเมนูสำเร็จ");
    } catch (error) {
      return toast.error("ไม่สามารถลบเมนูได้");
    }
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      input.price = +input.price;
      const { value, error } = editMenuSchema.validate(input, {
        abortEarly: false,
      });
      if (error) {
        console.log(error);
        return toast.error("กรุณาใส่ข้อมูลให้ถูกต้องและครบถ้วน");
      }
      setLoading(true);
      let res;

      if (input.menuImage instanceof File) {
        const formData = new FormData();
        for (let key in input) {
          if (input[key]) {
            formData.append(`${key}`, input[key]);
          }
        }
        // console.log("test1");
        res = await editMenu(menuDetail.id, formData);
      } else {
        // console.log("test2");
        res = await editMenu(menuDetail.id, input);
      }
      console.log("editcomplete");
      const editedMenu = res.data.editMenu;
      console.log(editedMenu);
      const indexEdit = allMenu.findIndex((el) => el.id == editedMenu.id);
      allMenu.splice(indexEdit, 1, editedMenu);
      setAllMenu([...allMenu]);
      toast.success("แก้ไขเมนูสำเร็จ");
      setIsEdit(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      return toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-primary opacity-70 z-20"></div>
      <div className="fixed z-30 min-h-full inset-0 flex justify-center items-center cursor-default">
        <div className="w-[540px] bg-mybackground rounded-3xl overflow-hidden ">
          <form className="border-4 border-primary" onSubmit={handleSubmitForm}>
            {loading && <Loading />}
            <header className="bg-primary flex items-center justify-center h-[65px]">
              <h5 className="text-whitetext">แก้ไขรายการอาหาร</h5>
            </header>
            <main className="px-[30px] py-[10px] flex flex-col gap-[15px]">
              {input.menuImage instanceof File ? (
                <div
                  onClick={() => fileEl.current.click()}
                  className="w-[160px] h-[160px] border-8 border-primary cursor-pointer rounded-2xl flex justify-center items-center overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(input.menuImage)}
                    alt="post"
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div
                  onClick={() => fileEl.current.click()}
                  className="w-[160px] h-[160px] border-8 border-primary cursor-pointer rounded-2xl flex justify-center items-center overflow-hidden"
                >
                  <img src={input.menuImage} />
                </div>
              )}

              <input
                type="file"
                className="hidden"
                name="menuImage"
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setInput({
                      ...input,
                      [e.target.name]: e.target.files[0],
                    });
                  }
                }}
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="menuName"
                  placeholder="ชื่ออาหาร"
                  value={input.menuName}
                  onChange={handleChangeInput}
                  className=" flex-[4] border-b-2 px-2 bg-mybackground text-xl w-full outline-none"
                />
                <div className="flex flex-[2]">
                  <input
                    type="text"
                    placeholder="ราคา"
                    name="price"
                    value={input.price}
                    onChange={handleChangeInput}
                    className=" border-b-2 px-2 bg-mybackground text-xl w-full outline-none"
                  />
                  <p className="text-xl">บาท</p>
                </div>
              </div>

              <div className="flex gap-4">
                <select
                  name="category"
                  value={input.category}
                  onChange={handleChangeInput}
                  className="flex-1 border-b-2 bg-mybackground outline-none"
                >
                  <option value="" disabled>
                    เลือกชนิดอาหาร
                  </option>
                  <option value="MAIN">จานหลัก</option>
                  <option value="DESSERT">ของหวาน</option>
                  <option value="DRINK">เครื่องดื่ม</option>
                </select>
                <select
                  name="status"
                  value={input.status}
                  onChange={handleChangeInput}
                  className="flex-1 border-b-2 bg-mybackground outline-none"
                >
                  <option value="" disabled>
                    สถานะสินค้า
                  </option>
                  <option value="AVAILABLE">พร้อมจำหน่าย</option>
                  <option value="OUTOFSTOCK">หมด</option>
                </select>
              </div>
              <textarea
                name="description"
                value={input.description}
                onChange={handleChangeInput}
                className="block w-full outline-none resize-none bg-mybackground border border-primary p-2"
                rows="4"
                placeholder="ข้อมูลเพิ่มเติม"
              />
            </main>
            <footer className="h-[75px] bg-primary  flex items-center justify-center gap-6">
              <button className="bg-secondary w-[250px] h-[50px] cursor-pointer rounded-xl flex items-center justify-center ">
                <p className="text-3xl text-primary font-bold">แก้ไข</p>
              </button>
              <div
                onClick={handleDeleteMenu}
                className="bg-primaryLight w-[80px] h-[50px] rounded-xl cursor-pointer flex items-center justify-center "
              >
                <p className="text-3xl text-mybackground font-bold">ลบ</p>
              </div>
              <div
                onClick={() => {
                  setIsEdit(false);
                }}
                className="bg-primaryLight w-[120px] h-[50px] rounded-xl cursor-pointer flex items-center justify-center "
              >
                <p className="text-3xl text-mybackground font-bold">ยกเลิก</p>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
}
