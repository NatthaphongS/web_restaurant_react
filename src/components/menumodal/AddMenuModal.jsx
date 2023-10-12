import { useState, useRef } from "react";
import Loading from "../Loading/Loading";
import Joi from "joi";
import { toast } from "react-toastify";
import axios from "axios";

const addMenuSchema = Joi.object({
  menuImage: Joi.any().required(),
  menuName: Joi.string().trim().required(),
  price: Joi.number().required(),
  catagory: Joi.string().required(),
  status: Joi.string().required(),
  description: Joi.string().allow(""),
});

export default function AddMenuModal({ catagory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);
  const [input, setInput] = useState({
    menuImage: "",
    menuName: "",
    price: "",
    catagory: catagory,
    status: "",
    description: "",
  });

  const createMenu = async (data) => {
    try {
      const res = await axios.post("/menu/create", data);
      toast.success("เพิ่มเมนูสำเร็จ");
      setIsOpen(false);
      setLoading(false);
      setInput({
        menuImage: "",
        menuName: "",
        price: "",
        catagory: catagory,
        status: "",
        description: "",
      });
    } catch (err) {
      return toast.error(err.response?.data.message);
    }
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    input.price = +input.price;

    const { value, error } = addMenuSchema.validate(input, {
      abortEarly: false,
    });
    if (error) {
      return toast.error("กรุณาใส่ข้อมูลให้ถูกต้องและครบถ้วน");
    }
    setLoading(true);
    for (let key in input) {
      if (input[key]) {
        formData.append(`${key}`, input[key]);
      }
    }
    createMenu(formData);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="w-[160px] flex-shrink-0 h-[200px] border-[8px] border-mybackground rounded-3xl cursor-pointer flex items-center justify-center"
      >
        <img src="/icons/Plus.png" alt="Add" />
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-primary opacity-70 z-20"></div>
          <div className="fixed z-30 min-h-full inset-0 flex justify-center items-center">
            <div className="w-[540px] bg-mybackground rounded-3xl overflow-hidden ">
              <form
                className="border-4 border-primary"
                onSubmit={handleSubmitForm}
              >
                {loading && <Loading />}
                <header className="bg-primary flex items-center justify-center h-[65px]">
                  <h5 className="text-whitetext">เพิ่มรายการอาหาร</h5>
                </header>
                <main className="px-[30px] py-[10px] flex flex-col gap-[15px]">
                  {input.menuImage ? (
                    <div
                      onClick={() => fileEl.current.click()}
                      className="w-[160px] h-[160px] border-8 border-primary cursor-pointer rounded-2xl flex justify-center items-center overflow-hidden"
                    >
                      <img
                        src={URL.createObjectURL(input.menuImage)}
                        alt="post"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => fileEl.current.click()}
                      className="w-[160px] h-[160px] border-8 border-primary cursor-pointer rounded-2xl flex justify-center items-center"
                    >
                      <img src="/icons/PlusDark.png" />
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
                      name="catagory"
                      value={input.catagory}
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
                <footer className="h-[75px] bg-primary  flex items-center justify-center gap-10">
                  <button className="bg-secondary w-[250px] h-[50px] cursor-pointer rounded-xl flex items-center justify-center ">
                    <p className="text-3xl text-primary font-bold">เพิ่ม</p>
                  </button>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="bg-primaryLight w-[120px] h-[50px] rounded-xl cursor-pointer flex items-center justify-center "
                  >
                    <p className="text-3xl text-mybackground font-bold">
                      ยกเลิก
                    </p>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
